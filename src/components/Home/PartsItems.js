import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Spinner from '../Hooks/Spinner';

const PartsItems = () => {




    const { data: parts, isLoading } = useQuery('items', () => fetch('http://localhost:5000/items').then(res => res.json()))


    if (isLoading) {
        return <Spinner></Spinner>
    }
    return (
        <div className='container mx-auto my-20'>

            <div className='my-16'>
                <h2 className='uppercase text-4xl text-center text-primary font-bold'>All of our products</h2>
                <p></p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center'>
                {parts?.slice(0, 6)?.map(part =>
                    <div key={part._id} className="card glass" style={{ maxWidth: '400px' }}>
                        <figure><img src={part?.img || 'imgbb server down'} style={{ borderRadius: '10px', width: '270px' }} className='mt-5' alt="car!" /></figure>
                        <div className="card-body">
                            <h2 className="card-title font-bold text-2xl" style={{ fontFamily: " 'Cinzel', serif" }}>{part?.name}</h2>
                            <p className='text-justify'>{part?.description}</p>
                            <div className='mt-3'>
                                <p className='font-bold mb-1' style={{ fontFamily: " 'Cinzel', serif" }}>Available Quantity: {part?.availableQuantity}</p>
                                <p className='font-bold' style={{ fontFamily: " 'Cinzel', serif" }}>Minimum Order Quantity: {part?.minimumQuantity}</p>
                            </div>
                            <p className='font-bold text-center my-3'>Price: ${part?.price}</p>
                            <div className="card-actions justify-center">
                                <Link to={`/purchase/${part?._id}`} className="btn btn-primary">Buy Now</Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PartsItems;