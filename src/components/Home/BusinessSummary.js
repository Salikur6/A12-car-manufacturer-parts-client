import React from 'react';
import bg from '../../img/bg.jpg'

const BusinessSummary = () => {
    return (

        <div style={{ backgroundImage: `url(${bg})` }} className="py-16">
            <div className='container mx-auto pb-16'>
                <h2 className='uppercase text-4xl text-center text-primary font-bold mb-16 pt-16'>Business Trust us</h2>
                <div class=" shadow grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">


                    <div class="stat place-items-center">
                        <div class="stat-title">Happy Clients</div>
                        <div class="stat-value">175+</div>
                        <div class="stat-desc">↘︎ 90 (14%)</div>
                    </div>


                    <div class="stat place-items-center">
                        <div class="stat-title">Annual Revenue</div>
                        <div class="stat-value">31K</div>
                        <div class="stat-desc">From January 1st to February 1st</div>
                    </div>

                    <div class="stat place-items-center">
                        <div class="stat-title">Tools</div>
                        <div class="stat-value text-secondary">150+</div>
                        <div class="stat-desc text-secondary">↗︎ 40 (2%)</div>
                    </div>



                    <div class="stat place-items-center">
                        <div class="stat-title">Complete Projects</div>
                        <div class="stat-value">90+</div>
                        <div class="stat-desc">↘︎ 90 (14%)</div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;