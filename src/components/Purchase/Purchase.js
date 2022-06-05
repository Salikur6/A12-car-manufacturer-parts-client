import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Spinner from '../Hooks/Spinner';

const Purchase = () => {
    const { id } = useParams();
    const [user] = useAuthState(auth);

    const { data: item, isLoading } = useQuery('oneItem', () => fetch(`http://localhost:5000/item/${id}`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('access-token')}`
        }
    }).then(res => res.json()))
    // console.log(item)

    const [customError, setCustomError] = useState('');

    const handleNumChange = (e) => {
        const value = (e.target.value);
        // console.log(value)
        if (value < item?.minimumQuantity) {
            setCustomError('Minimum order 100');
        } else if (value > item?.availableQuantity) {
            setCustomError(`maximum order ${item?.availableQuantity}`)
        } else {
            setCustomError('');
        }
    }



    const handleSubmit = (e) => {
        e.preventDefault();
        const name = (e.target.name.value);
        const email = (e.target.email.value);
        const tel = (e.target.tel.value);
        const country = (e.target.country.value);
        const city = (e.target.city.value);
        const address = e.target.address.value;
        const quantity = e.target.number.value;
        const parts = item?.name;
        const partsImg = item?.img;
        const partsPrice = item?.price;

        const order = { parts, partsImg, partsPrice, name, email, tel, country, city, address, quantity }

        fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(order),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success('Thank you for your order')
                e.target.reset();
            })

        // console.log(order)

    }

    if (isLoading) {
        return <Spinner></Spinner>
    }
    return (
        <div>
            <div className='container mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 my-24'>
                    <div className='mx-auto p-20 border'>
                        <img className='rounded' src={item?.img} alt="" />
                    </div>
                    <div className='pl-5'>
                        <h3 className='text-3xl font-bold mb-3' style={{ fontFamily: " 'Cinzel', serif" }}>{item?.name}</h3>
                        <h4 className='text-2xl font-bold mb-8'>Price: ${item?.price}</h4>
                        <p>Description: {item?.description}</p>
                        <div className='my-5' style={{ fontFamily: " 'Cinzel', serif" }}>

                            <p className='font-bold mt-2'>Available Quantity: {item?.availableQuantity}</p>
                            <p className='font-bold mt-2'>Minimum Order Quantity: {item?.minimumQuantity}</p>
                        </div>
                    </div>
                </div>

                <div>


                    <div className="hero bg-base-300 ">

                        <form className='glass w-full p-8 sm:w-4/5 md:w-1/2 lg:w-2/5 2xl:w-1/2 xl:w-2/5 my-10' onSubmit={handleSubmit}>

                            <div className="form-control">
                                <label className="label font-bold">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input className="input input-bordered" name='name' type="text" placeholder="Full Name" value={user?.displayName} readOnly required />
                            </div>

                            <div className="form-control">
                                <label className="label font-bold">
                                    <span className="label-text">Email</span>
                                </label>
                                <input className="input input-bordered" name='email' type="email" placeholder="Your Email" value={user?.email} readOnly required />
                            </div>


                            <div className="form-control">
                                <label className="label font-bold">
                                    <span className="label-text">Number</span>
                                </label>
                                <input name='tel' className="input input-bordered" type="tel" placeholder="Mobile Number" required />
                            </div>


                            <div className="form-control">
                                <label className="label font-bold">
                                    <span className="label-text">Country</span>
                                </label>
                                <select required name='country' className="select select-bordered w-full max-w-xs" >
                                    <option disabled hidden >Select your Country</option>
                                    <option value="Bangladesh">Bangladesh</option>

                                </select>
                            </div>

                            <div className="form-control">
                                <label className="label font-bold">
                                    <span className="label-text">City</span>
                                </label>
                                <select name='city' className="select select-bordered w-full max-w-xs" >
                                    <option disabled hidden >Select your City</option>
                                    <option value="Sylhet">Sylhet</option>
                                    <option value="Sylhet">Dhaka</option>
                                    <option value="Sylhet">Chattogram</option>
                                    <option value="Sylhet">Rajshahi</option>
                                    <option value="Sylhet">Cumilla</option>
                                    <option value="Sylhet">Rangpur</option>
                                </select>
                            </div>

                            <div className="form-control">
                                <label className="label font-bold">
                                    <span className="label-text">Street Address</span>
                                </label>
                                <textarea name='address' className='textarea textarea-bordered' placeholder='Street Address' required />
                            </div>

                            <div>
                                <label className="label font-bold">
                                    <span className="label-text">Quantity</span>
                                </label>
                                <input name='number' type="number" placeholder="number" className='input input-bordered' onChange={handleNumChange} defaultValue={item?.minimumQuantity}

                                />
                                <p className='text-red-600 font-bold'> {customError}</p>

                            </div>



                            <div className='mt-3 text-center'>

                                {customError ? <input disabled className='btn btn-primary' type="submit" value='Place Order' /> : <input className='btn btn-primary' type="submit" value='Place Order' />}


                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;