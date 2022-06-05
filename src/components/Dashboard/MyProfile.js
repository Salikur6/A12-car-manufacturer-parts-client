import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import Swal from 'sweetalert2';
import auth from '../../firebase.init';
import Spinner from '../Hooks/Spinner';
import client from '../../img/client.png';
// import construction from '../../img/construction.jpg';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const [loading, setLoading] = useState(true);

    const [userData, setUserData] = useState({
        location: '',
        phone: '',
        education: '',
        linkedin: ''
    })
    const [error, setError] = useState({
        location: '',
        phone: '',
        education: '',
        linkedin: '',
        other: ''
    })



    const { data: profileInfo, isLoading, refetch } = useQuery('profileinfo', () => fetch(`http://localhost:5000/profileinfo?email=${user?.email}`).then(res => res.json()));

    console.log(profileInfo);


    const handlelocationChange = e => {
        const locationRegex = /[,]+[ |[a-zà-ú.,-]*/;
        const validLocation = locationRegex.test(e.target.value);

        if (validLocation) {
            setUserData({ ...userData, location: e.target.value });
            setError({ ...error, location: '' })
        } else {
            setError({ ...error, location: 'Provide Valid Location' })
            setUserData({ ...userData, location: '' })
        }
    }
    const handlephoneChange = e => {
        const phoneRegex = /^(?:(?:\+|0{0,2})91(\s*[-]\s*)?|[0]?)?[456789]\d{9}|(\d[ -]?){10}\d$/;
        const validphone = phoneRegex.test(e.target.value);

        if (validphone) {
            setUserData({ ...userData, phone: e.target.value });
            setError({ ...error, phone: '' })
        } else {
            setError({ ...error, phone: 'Provide Valid phone Number' })
            setUserData({ ...userData, phone: '' })
        }
    }
    const handleEducationChange = e => {
        const educationRegex = /([a-zA-Z]+\s?\b){2,}/;
        const validEducation = educationRegex.test(e.target.value);

        if (validEducation) {
            setUserData({ ...userData, education: e.target.value });
            setError({ ...error, education: '' })
        } else {
            setError({ ...error, education: 'Provide Valid information' })
            setUserData({ ...userData, education: '' })
        }
    }
    const handleLinkedinChange = e => {
        setUserData({ ...userData, linkedin: e.target.value });
    }

    const handleSubmit = e => {
        e.preventDefault();

        const location = userData?.location;
        const phone = userData?.phone;
        const education = userData?.education;
        const linkedin = userData?.linkedin;

        if (location !== '' && phone !== '' && education !== '') {
            // console.log({ location, phone, education, linkedin })

            fetch(`http://localhost:5000/profile/${user?.email}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ location, phone, education, linkedin })
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);


                    setLoading(false)
                    // Swal.fire({
                    //     title: 'Profile Updated',
                    //     showClass: {
                    //         popup: 'animate__animated animate__fadeInDown'
                    //     },
                    //     hideClass: {
                    //         popup: 'animate__animated animate__fadeOutUp'
                    //     }
                    // })

                    Swal.fire({
                        title: 'Profile Updated',
                        width: 600,
                        padding: '3em',
                        color: '#716add',
                        background: '#fff url(/images/trees.png)',
                        backdrop: `
                          rgba(0,0,123,0.4)
                          url("/images/nyan-cat.gif")
                          left top
                          no-repeat
                        `
                    })
                    refetch()
                    e.target.reset();

                })
        }

        if (loading || isLoading) {
            return <Spinner></Spinner>
        }
    }
    // location regex :
    return (
        <div className='container mx-auto'>
            {/* <img className='w-full h-[100vh]' src={construction} alt="" /> */}

            <div className='bg-gray-800 text-white p-5'>
                {profileInfo?.location && <p className='mb-3 font-semibold'>Location: {profileInfo?.location}</p>}

                {profileInfo?.phone && <p className='mb-3 font-semibold'>Phone: {profileInfo?.phone}</p>}

                {profileInfo?.education && <p className='mb-3 font-semibold'>Education: {profileInfo?.education}</p>}

                {profileInfo?.linkedin && <p className='mb-3 font-semibold'>Linkedin: {profileInfo?.linkedin}</p>}

            </div>


            <form style={{ backgroundColor: 'rgba(71,85,105,.2)' }} onSubmit={handleSubmit} className='md:w-1/2 mx-auto p-4'>


                <div className='flex justify-center my-5'>
                    <div className='mr-5'>
                        <img src={profileInfo?.img || client} className='w-[65px] rounded-full' alt="" />
                    </div>
                    <div>
                        <p className='font-bold'>{user?.displayName}</p>
                        <p className='font-semibold'>{user?.email}</p>
                    </div>
                </div>
                <hr className='border border-black mb-4' />
                <h2 className='text-2xl font-bold text-center'>Update Your Info</h2>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold">Your Location</span>
                    </label>
                    <input type="text" onChange={handlelocationChange} name='location' placeholder="Your Location" className="input input-bordered font-bold" required />

                    <p className='mt-1 text-red-600 font-bold'>{error && error?.location}</p>

                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold">Your Phone No</span>
                    </label>
                    <input type="tel" onChange={handlephoneChange} name='phone' min='10' placeholder="Your Phone No" className="input input-bordered  font-bold" />


                    <p className='mt-1 text-red-600 font-bold'>{error && error?.phone}</p>
                </div>

                <div>
                    <label className="label">
                        <span className="label-text font-bold">Your Education</span>
                    </label>
                    <textarea rows="6" onChange={handleEducationChange} name='education' className='textarea textarea-success w-72 sm:w-full' cols="50" placeholder='Your Education' required>
                    </textarea>
                    <p className='mt-1 text-red-600 font-bold'>{error && error?.education}</p>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold">Your Linkedin URl</span>
                    </label>
                    <input type="text" onChange={handleLinkedinChange} name='linkedin' placeholder="Optional" className="input input-bordered font-bold" />
                </div>

                <div className="form-control mt-6">
                    <input type='submit' value='Update' className="btn text-white font-bold" style={{ backgroundImage: "linear-gradient(to bottom, #0066ff, #37d1ff)" }} />
                </div>
            </form>
        </div>
    );
};

export default MyProfile;