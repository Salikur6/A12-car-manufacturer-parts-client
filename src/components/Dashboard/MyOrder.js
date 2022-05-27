import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Spinner from '../Hooks/Spinner';

const MyOrder = () => {
    const [user] = useAuthState(auth);

    const { data: userData, isLoading } = useQuery('userOrder', () => fetch(`http://localhost:5000/userorder?email=${user?.email}`).then(res => res.json()));

    if (isLoading) {
        return <Spinner></Spinner>
    }

    console.log(userData)
    return (
        <div>
            <h2>My order page {userData.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full table-auto">

                    {/* <thead>
                        <tr>
                            <th>No.</th>
                            <th>Image</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Address</th>
                            <th>Phone</th>
                            <th>Proceed</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            userData.map((data, index) => <tr key={data._id}>
                                <th>{index + 1}</th>
                                <td><img className='rounded' style={{ width: '100px' }} src={data?.partsImg} alt="" /></td>
                                <td>${data?.partsPrice}</td>
                                <td>{data?.quantity}</td>
                                <td>{data?.address}, {data?.city}, {data?.country}</td>
                                <td>{data?.tel}</td>
                                <td><button className='btn btn-error'>Cancle</button></td>
                                <td><button className='btn btn-primary'>Payment</button></td>

                            </tr>)
                        }

                    </tbody> */}



                    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>

                                    <th scope="col" class="px-6 py-3">
                                        Image
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Product name
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Price
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Quantity
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Address
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Phone
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Proceed
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        <span class="sr-only">Edit</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {userData.map((data) => <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

                                    <td class="px-6 py-4">
                                        <img className='rounded' style={{ width: '100px' }} src={data?.partsImg} alt="" />
                                    </td>
                                    <td class="px-6 py-4">
                                        Laptop
                                    </td>
                                    <td class="px-6 py-4">
                                        ${data?.partsPrice}
                                    </td>
                                    <td class="px-6 py-4">
                                        {data?.quantity}
                                    </td>
                                    <td class="px-6 py-4">
                                        {data?.address}, {data?.city}, {data?.country}
                                    </td>
                                    <td class="px-6 py-4">
                                        {data?.tel}
                                    </td>
                                    <td class="px-6 py-4 ">
                                        {
                                            !data?.paid ? <button className='btn btn-error mr-2'>Cancle</button>
                                                :
                                                <p className='text-error font-bold mr-2'>Can't Cancel</p>
                                        }

                                    </td>
                                    <td>  {
                                        !data?.paid ? <button className='btn btn-primary mr-2'>
                                            <Link to={`/payment/${data?._id}`}>Payment</Link>

                                        </button>
                                            : <p className='text-blue-500 font-bold mr-2'>Already Paid</p>
                                    }</td>
                                </tr>)}
                            </tbody>
                        </table>
                    </div>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;