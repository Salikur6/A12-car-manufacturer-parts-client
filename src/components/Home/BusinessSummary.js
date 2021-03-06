import React from 'react';
import bg from '../../img/bg.jpg'
import client from '../../img/icon/client.png'
import revenue from '../../img/icon/revenue.png'
import parts from '../../img/icon/parts.png'
import projects from '../../img/icon/projects.png'

const BusinessSummary = () => {
    return (

        <div style={{ backgroundImage: `url(${bg})` }} className="pt-16">
            <div className='container mx-auto pb-16'>
                <h2 className='uppercase text-4xl text-center text-primary font-bold mb-16 pt-16'>Business Trust us</h2>
                <div className=" shadow grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">


                    <div className="stat place-items-center">
                        <div className='mb-3'><img src={client} className='w-14' alt="happy clients" /></div>
                        <div className="stat-title">Happy Clients</div>
                        <div className="stat-value">175+</div>
                        <div className="stat-desc">↘︎ 90 (14%)</div>
                    </div>


                    <div className="stat place-items-center">
                        <div className='mb-3'><img src={revenue} className='w-14' alt="happy clients" /></div>
                        <div className="stat-title">Annual Revenue</div>
                        <div className="stat-value">31K</div>
                        <div className="stat-desc">From January 1st to February 1st</div>
                    </div>

                    <div className="stat place-items-center">
                        <div className='mb-3'><img src={parts} className='w-14' alt="happy clients" /></div>
                        <div className="stat-title">Parts</div>
                        <div className="stat-value text-secondary">150+</div>
                        <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
                    </div>



                    <div className="stat place-items-center">
                        <div className='mb-3'><img src={projects} className='w-14' alt="happy clients" /></div>
                        <div className="stat-title">Complete Projects</div>
                        <div className="stat-value">90+</div>
                        <div className="stat-desc">↘︎ 90 (14%)</div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;