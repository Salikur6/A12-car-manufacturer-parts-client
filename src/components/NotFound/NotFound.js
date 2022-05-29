import React from 'react';
import notFoundImg from '../../img/404.jpg'

const NotFound = () => {
    return (
        <div>
            <div><img className='w-full h-[100vh]' src={notFoundImg} alt="" /></div>
        </div>
    );
};

export default NotFound;