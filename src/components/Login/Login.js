import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import loginBg from '../../img/loginbg.jpg';
import google from '../../img/social-icon/google.png'
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Spinner from '../Hooks/Spinner';
import { toast } from 'react-toastify';


const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    // linear-gradient(to bottom, #0066ff, #37d1ff)

    let from = location.state?.from?.pathname || "/";


    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    const [
        signInWithEmailAndPassword,
        signInUser,
        signInLoading,
        signInError,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, resetSending, resetError] = useSendPasswordResetEmail(
        auth
    );

    if (googleUser || signInUser) {
        navigate(from, { replace: true });
    };

    const [userInfo, setUserInfo] = useState({
        email: '',
        password: ''
    })

    const [error, setError] = useState({
        email: '',
        password: '',
        other: ''
    })
    const handleEmailChange = (e) => {
        const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

        const validEmail = emailRegex.test(e.target.value);
        if (validEmail) {
            setUserInfo({ ...userInfo, email: e.target.value });
            setError({ ...error, email: '' });
        } else {
            setError({ ...error, email: 'Invalid Email' });
            setUserInfo({ ...userInfo, email: '' });
        }
    }

    const handlePasswordChange = (e) => {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
        const validPassword = passwordRegex.test(e.target.value);



        if (validPassword) {
            setUserInfo({ ...userInfo, password: e.target.value });
            setError({ ...error, password: '' });
        } else {
            setError({ ...error, password: 'Minimum six characters with at least one letter and one number' });
            setUserInfo({ ...userInfo, password: '' });
        }
    }

    const handleResetPassword = async () => {
        const email = userInfo.email;
        if (email !== '') {
            await sendPasswordResetEmail(email);
            toast.success("Sent Email")
        } else {
            return toast.error('Enter a Valid Email')
        }

        if (resetError?.message) {
            return toast.error('Enter a Valid Email')
        }

    }

    const handleSubmit = e => {
        e.preventDefault();
        const email = userInfo.email;
        const password = userInfo.password;

        signInWithEmailAndPassword(email, password);
    }



    const handleGoogleSign = () => {
        signInWithGoogle()
    }


    if (googleLoading || signInLoading || resetSending) {
        return <Spinner></Spinner>
    }



    return (
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
                                    <h4 className='text-2xl text-center'>Sign Into Your Account</h4>
                                </div>

                                <form onSubmit={handleSubmit}>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-bold">Email</span>
                                        </label>
                                        <input type="email" onChange={handleEmailChange} placeholder="Email" className="input input-bordered  font-bold" />
                                        <p className='mt-1 text-red-600 font-bold'>{error && error?.email}</p>

                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-bold">Password</span>
                                        </label>
                                        <input type="password" placeholder="Password" className="input input-bordered  font-bold" onChange={handlePasswordChange} />


                                        <label className="label">
                                            <Link to='' className="label-text-alt link link-hover font-bold" onClick={handleResetPassword}>Forgot password?</Link>
                                        </label>
                                        <p className='mt-1 text-red-600 font-bold'>{resetError && resetError?.message}</p>


                                        <p className='mt-1 text-red-600 font-bold'>{error && error?.password}</p>

                                    </div>
                                    {signInError && <p className='text-red-600 font-bold'>{signInError?.message}</p>}
                                    <div className="form-control mt-6">
                                        <input type='submit' value='Login' className="btn text-white font-bold" style={{ backgroundImage: "linear-gradient(to bottom, #0066ff, #37d1ff)" }} />
                                    </div>
                                </form>

                                <div>
                                    {googleError && <p className='text-red-600 font-bold'>{googleError?.message}</p>}
                                </div>

                                <div className='mt-5'>
                                    <button className='btn btn-outline hover:btn-error' onClick={handleGoogleSign}><img className='w-12 p-2' src={google} alt="" /></button>
                                </div>

                                <div className="divider">OR</div>

                                <div className='text-center'>
                                    <p>Dont't have an account? <Link className='link link-accent' to='/register'>Register here</Link></p>
                                </div>

                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;