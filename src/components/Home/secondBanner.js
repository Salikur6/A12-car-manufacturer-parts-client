import React from 'react';
import bgTair from '../../img/bgtair.png'

const secondBanner = () => {
    return (
        <div>
            <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row container mx-auto py-40">
                    <div className='shrink-0 glass'>
                        <img src={bgTair} className="max-w-sm sm:w-96 w-72 rounded-lg shadow-2xl" alt='' />
                    </div>

                    <div style={{ maxWidth: "700px" }}>
                        <h1 className="text-5xl font-bold">Win The Cost Of Your Tyres Back</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Discover Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default secondBanner;