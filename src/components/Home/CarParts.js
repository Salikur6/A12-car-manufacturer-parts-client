import React from 'react';
import parts1 from '../../img/parts1.jpg'
import parts2 from '../../img/parts2.jpg'
import parts3 from '../../img/parts3.jpg'

const CarParts = () => {
    return (
        <div className='container mx-auto mt-[-50px] z-50 relative'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                <div className='overflow-hidden '><img className='hover:scale-125' style={{ transition: 'all ease-in-out .8s' }} src={parts3} alt="" /></div>

                <div className='overflow-hidden'><img className='hover:scale-125' style={{ transition: 'all ease-in-out .8s' }} src={parts1} alt="" /></div>


                <div className='overflow-hidden'><img className='hover:scale-125' style={{ transition: 'all ease-in-out .8s' }} src={parts2} alt="" /></div>
            </div>
        </div>
    );
};

export default CarParts;