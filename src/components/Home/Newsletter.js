import React from 'react';

const Newsletter = () => {
    return (
        <div>
            <footer className="footer p-10 bg-gray-800 text-base-content justify-items-center py-20 mb-5">

                <div className='text-white'>
                    <span className="footer-title font-bold">Newsletter--get updates with latest topics</span>
                    <div className="form-control w-80">
                        <label className="label">
                            <span className="label-text font-bold text-white">Enter your email address</span>
                        </label>
                        <div className="relative my-8">
                            <input type="email" placeholder="Your E-mail Address *" className="input input-bordered w-full pr-16 text-lime-700 font-bold" />
                            <button className="btn btn-secondary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Newsletter;