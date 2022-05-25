import React from 'react';
import loginBg from '../../img/loginbg.jpg';
import google from '../../img/social-icon/google.png'

import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Register = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);


    return (

        <>




            <div>
                <div className='grid grid-cols-1 lg:grid-cols-2'>
                    <div className='relative z-10 hidden lg:block'>
                        <img src={loginBg} className='z-0 relative h-full' alt="" />
                        <div className='absolute inset-1/4'>
                            <div className='rounded' style={{ backgroundImage: "linear-gradient(to bottom, #0066ff, #37d1ff)", padding: '55px 20px' }}>
                                <h2 style={{ fontFamily: " 'Cinzel', serif" }} className='text-4xl mb-5 text-white font-bold'>Welcome to Acura</h2>
                                <p className='text-white'>Acura is the luxury and performance division of Japanese automaker Honda, based primarily in North America. The brand was launched in the United States and Canada on March 27, 1986, marketing luxury and performance automobiles.</p>
                            </div>
                        </div>
                    </div>
                    <div className='table py-40' style={{ backgroundImage: "linear-gradient(to bottom, #0066ff, #37d1ff)" }}>
                        <div class="hero" style={{ display: 'table-cell', verticalAlign: 'middle' }}>
                            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto">

                                <div class="card-body">
                                    <div className='my-5'>
                                        <h3 className='text-3xl font-bold text-center mb-3'>Acura</h3>
                                        <h4 className='text-2xl text-center'>Create An Account</h4>
                                    </div>


                                    <form onSubmit={handleSubmit(onSubmit)}>

                                        <div class="form-control mb-4">
                                            <span class="label-text font-bold">Full Name</span>
                                            <input type="text" placeholder="Full Name" class="input input-bordered font-bold" {...register("fullName", { required: true, maxLength: 80 })} />
                                        </div>
                                        <div class="form-control mb-4">
                                            <span class="label-text font-bold">Email</span>
                                            <input type="email" placeholder="Email" class="input input-bordered font-bold" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                                        </div>
                                        <div class="form-control mb-4">
                                            <span class="label-text font-bold">Password</span>

                                            <input type="password" placeholder="password" class="input input-bordered font-bold" {...register("password", { pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/i })} />
                                        </div>


                                        <div class="form-control">
                                            <label class="label cursor-pointer justify-start">


                                                <input type="checkbox" placeholder="check" {...register("checked", {})} />

                                                <span class="label-text pl-2">I agree to the terms of service</span>
                                            </label>
                                        </div>
                                        <div class="form-control mt-6">
                                            <input type="submit" value='Register' class="btn text-white font-bold" style={{ backgroundImage: "linear-gradient(to bottom, #0066ff, #37d1ff)" }} />
                                        </div>


                                        <div className='mt-5'>
                                            <button className='btn btn-outline hover:btn-error'><img className='w-12 p-2' src={google} alt="" /></button>
                                        </div>

                                        <div class="divider">OR</div>

                                        <div className='text-center'>
                                            <p>Already have an Account? <Link className='link link-accent' to='/login'>Login here</Link></p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>


    );
};

export default Register;