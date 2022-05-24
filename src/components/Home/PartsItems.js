import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PartsItems = () => {
    const [parts, setParts] = useState([]);
    console.log(parts)

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setParts(data))
    }, [])
    return (
        <div className='container mx-auto my-20'>

            <div className='my-16'>
                <h2 className='text-4xl font-bold text-center uppercase'>All of our products</h2>
                <p></p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center'>
                {parts.slice(0, 6).map(part =>
                    <div class="card glass" style={{ maxWidth: '400px' }}>
                        <figure><img src={part?.img} style={{ borderRadius: '10px', width: '270px' }} className='mt-5' alt="car!" /></figure>
                        <div class="card-body">
                            <h2 class="card-title font-bold text-2xl" style={{ fontFamily: " 'Cinzel', serif" }}>{part?.name}</h2>
                            <p className='text-justify'>{part?.description}</p>
                            <div className='mt-3'>
                                <p className='font-bold mb-1' style={{ fontFamily: " 'Cinzel', serif" }}>Available Quantity: {part?.availableQuantity}</p>
                                <p className='font-bold' style={{ fontFamily: " 'Cinzel', serif" }}>Minimum Order Quantity: {part?.minimumQuantity}</p>
                            </div>
                            <p className='font-bold text-center my-3'>Price: ${part?.price}</p>
                            <div class="card-actions justify-center">
                                <Link to='/purchase' class="btn btn-primary">Buy Now</Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PartsItems;