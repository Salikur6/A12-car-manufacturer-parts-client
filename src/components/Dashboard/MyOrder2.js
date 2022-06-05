import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Spinner from '../Hooks/Spinner';

const MyOrder2 = () => {
    const [user] = useAuthState(auth);
    const Swal = require('sweetalert2')
    const navigate = useNavigate();

    const { data: userData, isLoading, refetch } = useQuery('userOrder', () => fetch(`http://localhost:5000/userorder?email=${user?.email}`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('access-token')}`
        }
    }).then(res => {
        // console.log(res)
        if (res.status === 401 || res.status === 403) {
            signOut(auth)
            localStorage.removeItem('access-token');
            navigate('/')
        }
        return res.json()
    }));

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
                fetch(`http://localhost:5000/order/${id}`, {
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



    return (
        <div className='mx-auto container'>
            {
                userData?.map(data =>

                    <div className='bg-base-200 my-8 p-5 glass' key={data?._id}>
                        <div>
                            <h3 className='mb-3 text-2xl font-bold'>{data?.parts}</h3>
                            <h5 className='mb-3 font-semibold text-sm'>Order Id: {data?._id}</h5>
                            <h5 className='mb-3 font-semibold text-sm'>TXN Id: {data?.transaction}</h5>
                            <h4 className='mb-3 font-bold text-sm'>Order Quantity: {data?.quantity}</h4>
                            <h4 className='mb-3 font-bold text-sm'>Unit Price: $ {data?.partsPrice}</h4>
                            <h4 className='mb-3 font-bold text-sm'>Shipping Address: {data?.address}</h4>


                            {data?.transaction ? <button className='btn btn-success'>PROCESS SHIPMENT</button> : <div>
                                <button className='btn btn-primary mr-2' ><Link to={`/payment/${data?._id}`}>PAY NOW</Link></button>


                                <button className='btn btn-error' onClick={() => handleDelete(data?._id)}>CANCEL ORDER</button>
                            </div>}


                        </div>


                        <div className='text-center my-5'>
                            {
                                data?.transaction ?
                                    <ul className="steps">
                                        <li className="step step-warning">Register</li>
                                        <li className="step step-warning">Place Order</li>
                                        <li className="step step-warning">Payment</li>
                                        <li className="step">Receive Product</li>
                                    </ul>
                                    :

                                    <ul className="steps">
                                        <li className="step step-warning">Register</li>
                                        <li className="step step-warning">Place Order</li>
                                        <li className="step ">Payment</li>
                                        <li className="step">Receive Product</li>
                                    </ul>
                            }
                        </div>

                    </div>

                )
            }


        </div>
    );
};

export default MyOrder2;