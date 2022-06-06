import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import Spinner from '../Hooks/Spinner';
// import construction from '../../img/construction.jpg';

const ManageAllOrders = () => {

    const { data: orderData, isLoading, refetch } = useQuery('manageOrder', () => fetch('http://localhost:5000/manageorders').then(res => res.json()))




    const handleShipped = (id) => {
        console.log(id);

        fetch(`http://localhost:5000/manageorders/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                refetch();
                toast('Item Shipped')
            })

    }



    const handleDelete = (id) => {


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

                fetch(`http://localhost:5000/deleteorder/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        refetch();

                        if (data.deletedCount === 1) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        } else {
                            toast('No documents matched the query. Deleted 0 Item.')
                        }
                    })

            }
        })

    }

    if (isLoading) {
        return <Spinner></Spinner>
    }
    return (
        <div>
            {/* <img className='w-full h-[100vh]' src={construction} alt="" /> */}

            <table className='table w-full table-auto hidden md:table'>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Order By</th>
                        <th>Purchased</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Proceed</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>

                    {orderData?.map(data =>
                        <tr key={data?._id}>
                            <td>{data?.parts} {data?.paid ?
                                <div className="badge badge-primary font-bold">Paid</div> :
                                <div className="badge badge-error font-bold">Unpaid</div>}</td>


                            <td>{data?.name}</td>
                            <td>{data?.quantity}</td>
                            <td>${data?.partsPrice}</td>
                            <td className=''>

                                {(data?.paid && !data?.shipped) && <p className='text-black font-bold p-2 text-center rounded-xl bg-warning'>Pending</p>
                                }

                                {(data?.paid && data?.shipped) && <p className='text-black font-bold p-2 text-center rounded-xl bg-accent'>Shipped</p>
                                }

                                {!data?.paid && <p className='text-black font-bold p-2 text-center rounded-xl bg-error'>Unpaid</p>}

                            </td>

                            {(data?.paid && !data?.shipped) && <td><button className='btn btn-primary font-bold' onClick={() => handleShipped(data?._id)}>Shipped</button></td>}

                            {!data?.paid && <td><button className='btn btn-error font-bold' onClick={() => handleDelete(data?._id)}>Delete</button></td>}

                        </tr>

                    )}

                </tbody>
            </table>







            {/* --------------------- */}

            <div className='md:hidden'>
                {
                    orderData?.map(data =>

                        <div className='bg-base-200 my-8 p-5 glass' key={data?._id}>
                            <div>
                                <h3 className='mb-3 text-2xl font-bold'>{data?.parts} {data?.paid ?
                                    <div className="badge badge-primary font-bold">Paid</div> :
                                    <div className="badge badge-error font-bold">Unpaid</div>}</h3>


                                <h5 className='mb-3 font-semibold text-sm'>Order By: {data?.name}</h5>
                                <h4 className='mb-3 font-bold text-sm'>Purchased: {data?.quantity}</h4>
                                <h4 className='mb-3 font-bold text-sm'>Unit Price: $ {data?.partsPrice}</h4>


                                <div className='flex justify-around'>
                                    <h4 className='mb-3 font-bold text-sm w-48 my-5'>Status: {(data?.paid && !data?.shipped) && <p className='text-black font-bold p-2 text-center rounded-xl bg-warning my-3'>Pending</p>
                                    }  {(data?.paid && data?.shipped) && <p className='text-black font-bold p-2 text-center rounded-xl bg-accent'>Shipped</p>
                                        }

                                        {!data?.paid && <p className='text-black font-bold p-2 text-center rounded-xl bg-error my-3'>Unpaid</p>}
                                    </h4>


                                    {data?.shipped ? '' : <h4 className=''>Proceed: {(data?.paid && !data?.shipped) && <td><button className='btn btn-primary my-3' onClick={() => handleShipped(data?._id)}>Shipped</button></td>}

                                        {!data?.paid && <td><button className='btn btn-error my-3' onClick={() => handleDelete(data?._id)}>Delete</button></td>}
                                    </h4>}
                                </div>

                            </div>
                        </div>

                    )
                }
            </div>



        </div>
    );
};

export default ManageAllOrders;