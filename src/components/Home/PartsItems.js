import React, { useEffect, useState } from 'react';

const PartsItems = () => {
    const [parts, setParts] = useState([]);
    console.log(parts)

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setParts(data))
    }, [])
    return (
        <div className='container mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center'>
                {parts.map(part =>
                    <div class="card glass" style={{ maxWidth: '320px' }}>
                        <figure><img src={part?.img} style={{ borderRadius: '10px' }} className='mt-5' alt="car!" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">{part?.name}</h2>
                            <p>{part?.description}</p>
                            <div>
                                <p>Available Quantity: {part?.availableQuantity}</p>
                                <p>Minimum Order Quantity: {part?.minimumQuantity}</p>
                            </div>
                            <p className='font-bold'>Price: ${part?.price}</p>
                            <div class="card-actions justify-center">
                                <button class="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PartsItems;