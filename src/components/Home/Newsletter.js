import React from 'react';

const Newsletter = () => {
    return (
        <div>
            <footer class="footer p-10 bg-gray-800 text-base-content justify-items-center py-20 mb-5">

                <div className='text-white'>
                    <span class="footer-title font-bold">Newsletter--get updates with latest topics</span>
                    <div class="form-control w-80">
                        <label class="label">
                            <span class="label-text font-bold text-white">Enter your email address</span>
                        </label>
                        <div class="relative my-8">
                            <input type="email" placeholder="Your E-mail Address *" class="input input-bordered w-full pr-16" />
                            <button class="btn btn-secondary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Newsletter;