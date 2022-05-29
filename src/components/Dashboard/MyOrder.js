import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Spinner from '../Hooks/Spinner';

const MyOrder = () => {
    const [user] = useAuthState(auth);
    const Swal = require('sweetalert2')

    const { data: userData, isLoading, refetch } = useQuery('userOrder', () => fetch(`https://shielded-reef-19583.herokuapp.com/userorder?email=${user?.email}`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('access-token')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Spinner></Spinner>
    }


    const handleDelete = (id) => {
        // console.log(id)

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://shielded-reef-19583.herokuapp.com/order/${id}`, {
                    method: "DELETE",
                }).then(res => res.json())
                    .then(data => {

                        console.log(data)
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                        refetch();
                    })
            }
        })
    }

    // console.log(userData)
    return (
        <div className='px-10'>
            <h2 className='text-xl text-center font-semibold mb-4'>Your Total Ordar {userData.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full table-auto">

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



                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>

                                    <th scope="col" className="px-6 py-3">
                                        Image
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Product name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Price
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Quantity
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Address
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Phone
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Proceed
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        <span className="sr-only">Edit</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {userData.map((data) => <tr
                                    key={data?._id}
                                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

                                    <td className="px-6 py-4">
                                        <img className='rounded' style={{ width: '100px' }} src={data?.partsImg} alt="" />
                                    </td>
                                    <td className="px-6 py-4">
                                        {data?.parts}
                                    </td>
                                    <td className="px-6 py-4">
                                        ${data?.partsPrice}
                                    </td>
                                    <td className="px-6 py-4">
                                        {data?.quantity}
                                    </td>
                                    <td className="px-6 py-4">
                                        {data?.address}, {data?.city}, {data?.country}
                                    </td>
                                    <td className="px-6 py-4">
                                        {data?.tel}
                                    </td>
                                    <td className="px-6 py-4 ">
                                        {
                                            !data?.paid ? <button className='btn btn-error mr-2' onClick={() => handleDelete(data?._id)}>Cancle</button>
                                                :
                                                <p className='text-error font-bold mr-2'>Can't Cancel</p>
                                        }

                                    </td>
                                    <td>  {
                                        !data?.paid ? <button className='btn btn-primary mr-2'>
                                            <Link to={`/payment/${data?._id}`}>Payment</Link>

                                        </button>
                                            : <p className='text-blue-500 font-bold mr-2'>Already Paid <br /> TransactionId: {data?.transaction}</p>
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