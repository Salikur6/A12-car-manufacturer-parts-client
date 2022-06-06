import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
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

    if (isLoading) {
        return <Spinner></Spinner>
    }
    return (
        <div>
            {/* <img className='w-full h-[100vh]' src={construction} alt="" /> */}

            <table className='table w-full table-auto'>
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
                                <div className="badge badge-warning font-bold">Unpaid</div>}</td>


                            <td>{data?.name}</td>
                            <td>{data?.quantity}</td>
                            <td>${data?.partsPrice}</td>
                            <td className=''>

                                {(data?.paid && !data?.shipped) && <p className='text-black font-bold p-2 text-center rounded-xl bg-warning'>Pending</p>
                                }

                                {(data?.paid && data?.shipped) && <p className='text-black font-bold p-2 text-center rounded-xl bg-accent'>Shipped</p>
                                }

                            </td>

                            {(data?.paid && !data?.shipped) && <td><button className='btn btn-primary' onClick={() => handleShipped(data?._id)}>Shipped</button></td>}

                            {!data?.paid && <td><button className='btn btn-error'>Delete</button></td>}






                        </tr>

                    )}



                </tbody>
            </table>
        </div>
    );
};

export default ManageAllOrders;