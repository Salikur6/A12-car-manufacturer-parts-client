import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import Spinner from '../Hooks/Spinner';

const CheckoutForm = ({ orderId }) => {

    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [success, setsuccess] = useState('');
    const [processing, setprocessing] = useState(false);
    const [transaction, setTransaction] = useState('');
    const [clientSecret, setClientSecret] = useState('');


    const { partsPrice, email, name } = orderId;
    const totalPrice = partsPrice * orderId?.quantity;
    // console.log(totalPrice);
    // console.log(orderId);
    useEffect(() => {
        fetch(`https://shielded-reef-19583.herokuapp.com/create-payment-intent`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ totalPrice })
        })
            .then(res => res.json())
            .then(data => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret);
                }
            })
    }, [totalPrice])


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {

            return;
        }


        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setCardError(error?.message);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setCardError('')
        }

        setprocessing(true)
        //confirm card payment

        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                        email: email
                    },
                },
            },
        );

        if (intentError) {
            setCardError(intentError?.message)
            setsuccess('')
            setprocessing(false)
        } else {
            setCardError('');
            setTransaction(paymentIntent?.id);
            setsuccess('Congrats! Your payment is completed')


            //
            // console.log(paymentIntent);

            fetch(`https://shielded-reef-19583.herokuapp.com/order/${orderId?._id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ partsId: orderId._id, transaction: paymentIntent?.id })
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data)
                    setprocessing(false);
                })
        }

    };

    if (processing) {
        return <Spinner></Spinner>
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#0000DC',
                                '::placeholder': {
                                    color: '#000C66',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-success font-bold btn-sm my-5' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>

            {
                cardError && <p className='text-red-500 font-semibold'>{cardError}</p>
            }
            {
                success && <div className='text-green-500 font-semibold'><p>
                    {success}
                </p>
                    <p>Your Transaction Id: <span className='text-orange-500 font-bold'>{transaction}</span></p>
                </div>
            }
        </div>
    );
};
export default CheckoutForm;