import React, { useState } from 'react';
import loginBg from '../../img/loginbg.jpg';
import google from '../../img/social-icon/google.png'
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Spinner from '../Hooks/Spinner';

const Register = () => {
    const [checked, setChecked] = useState(false);

    const handleChecked = e => {
        setChecked(e.target.checked);
    }

    const [
        createUserWithEmailAndPassword,
        user,
        createLoading,
        createError,
    ] = useCreateUserWithEmailAndPassword(auth);


    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);


    console.log(user || googleUser)


    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        console.log(data)
        const email = data.email;
        const password = data.password;
        const fullName = data.fullName;
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: fullName })

    };
    console.log(errors);

    const handleGoogleSign = () => {
        signInWithGoogle();
    }

    if (createLoading || googleLoading || updating) {
        return <Spinner></Spinner>
    }

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
                        <div className="hero" style={{ display: 'table-cell', verticalAlign: 'middle' }}>
                            <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100 mx-auto">

                                <div className="card-body">
                                    <div className='my-5'>
                                        <h3 className='text-3xl font-bold text-center mb-3'>Acura</h3>
                                        <h4 className='text-2xl text-center'>Create An Account</h4>
                                    </div>

                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="form-control mb-4">
                                            <span className="label-text font-bold">Full Name</span>
                                            <input type="text" placeholder="Full Name" className="input input-bordered font-bold" {...register("fullName", { required: true, maxLength: 80 })} />

                                            <p className='text-red-600 font-bold'>{errors.fullName && "Full Name is required"}</p>
                                        </div>
                                        <div className="form-control mb-4">
                                            <span className="label-text font-bold">Email</span>
                                            <input type="email" placeholder="Email" autoComplete='off' className="input input-bordered font-bold" {...register("email", { required: true, pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i })} />

                                            {errors.email && errors.email.type === "pattern" && <span className='text-red-600 font-bold'>Enter a Valid Eamil</span>}
                                        </div>
                                        <div className="form-control mb-4">
                                            <span className="label-text font-bold">Password</span>

                                            <input type="password" placeholder="password" className="input input-bordered font-bold" {...register("password", { required: true, pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/i })} />

                                            {errors.password && errors.password.type === "pattern" && <span className='text-red-600 font-bold'>Minimum six characters with at least one letter and one number</span>}

                                        </div>


                                        <div className="form-control">
                                            <label className="label cursor-pointer justify-start">


                                                <input type="checkbox" placeholder="check" {...register("checked", {})} onClick={handleChecked} />

                                                <span className="label-text pl-2">I agree to the terms of service</span>
                                            </label>
                                        </div>

                                        <p className='text-red-600 font-bold'>{createError && createError?.message}</p>
                                        <p className='text-red-600 font-bold'>{updateError && updateError?.message}</p>
                                        <div className="form-control mt-6">

                                            {
                                                checked ? <input type="submit" value='Register' className="btn text-white font-bold" style={{ backgroundImage: "linear-gradient(to bottom, #0066ff, #37d1ff)" }} /> : <input type="submit" value='Register' className="btn text-white font-bold" disabled='disabled' style={{ backgroundImage: "linear-gradient(to bottom, #0066ff, #37d1ff)" }} />
                                            }
                                        </div>

                                    </form>
                                    <p className='text-red-600 font-bold'>{googleError && googleError?.message}</p>
                                    <div className='mt-5'>
                                        <button className='btn btn-outline hover:btn-error' onClick={handleGoogleSign}><img className='w-12 p-2' src={google} alt="" /></button>
                                    </div>

                                    <div className="divider">OR</div>

                                    <div className='text-center'>
                                        <p>Already have an Account? <Link className='link link-accent' to='/login'>Login here</Link></p>
                                    </div>
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