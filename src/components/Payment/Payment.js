import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Spinner from '../Hooks/Spinner';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L45iXEnMw91zFUBc7sZTlUkKmV5EdKt2SWFW1q9BXQvcujPJBL38vUuyLR5M26gRpwmk1mb1qWXlYRcH6wPjppT00lT0I6bxP');

const Payment = () => {
    const { id } = useParams();

    const { data: orderId, isLoading } = useQuery('orderid', () => fetch(`http://localhost:5000/orderid/${id}`).then(res => res.json()))


    if (isLoading) {
        return <Spinner></Spinner>
    }
    return (
        <div className='container mx-auto'>

            <div className="card mt-20 mx-auto w-full md:w-96 bg-base-100 glass p-10 shadow-xl">
                <h2 className="text-xs font-bold text-primary">Hello, {orderId?.name}</h2>
                <p className='font-semibold my-2 text-xl'>Please Pay For {orderId?.parts}</p>
                <h3 className='text-sm font- mb-1'>Order Summary</h3>
                <hr className='border-2  bg-black mb-3' />
                <div className='flex text-sm font-semibold mt-3'>
                    <p className='mx-2'>Price: ${orderId?.partsPrice}</p> *

                    <p className='mx-2'>Quantity: ${orderId?.quantity}</p>
                </div>
                <p className='mx-2 my-2 font-bold text-base text-center mt-8'>Order Total: ${orderId?.partsPrice * orderId?.quantity}</p>
            </div>


            {/* -------- */}

            <div className="card md:w-96 shadow mx-auto mt-8 glass">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm orderId={orderId} />
                    </Elements>
                </div>
            </div>


            <div className="bg-white min-h-screen flex justify-center items-center">
                <div className="space-y-16">
                    <div className="md:w-96 w-full h-56 m-auto bg-red-100 rounded-xl relative text-white shadow-2xl transition-transform transform hover:scale-110">

                        <img className="relative object-cover w-full h-full rounded-xl" src="https://i.imgur.com/kGkSg1v.png" alt='' />

                        <div className="w-full px-8 absolute top-8">
                            <div className="flex justify-between">
                                <div className="">
                                    <p className="font-light">
                                        Name
                                    </p>
                                    <p className="font-medium tracking-widest">
                                        Salikur Islam
                                    </p>
                                </div>
                                <img className="w-14 h-14" src="https://i.imgur.com/bbPHJVe.png" alt='' />
                            </div>
                            <div className="pt-1">
                                <p className="font-light">
                                    Card Number
                                </p>
                                <p className="font-medium tracking-more-wider">
                                    ****  ****  ****  7632
                                </p>
                            </div>
                            <div className="pt-6 pr-6">
                                <div className="flex justify-between">
                                    <div className="">
                                        <p className="font-light text-xs">
                                            Valid
                                        </p>
                                        <p className="font-medium tracking-wider text-sm">
                                            11/15
                                        </p>
                                    </div>
                                    <div className="">
                                        <p className="font-light text-xs">
                                            Expiry
                                        </p>
                                        <p className="font-medium tracking-wider text-sm">
                                            03/25
                                        </p>
                                    </div>

                                    <div className="">
                                        <p className="font-light text-xs">
                                            CVV
                                        </p>
                                        <p className="font-bold tracking-more-wider text-sm">
                                            ···
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>






        </div>
    );
};

export default Payment;