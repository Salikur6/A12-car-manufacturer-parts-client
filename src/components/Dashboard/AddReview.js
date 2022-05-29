import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth);
    // console.log(user)

    const handleSubmit = e => {
        e.preventDefault();

        const rating = e.target.number.value;
        const comment = e.target.comment.value;
        const name = user?.displayName;
        const img = user?.photoURL;
        const review = { rating, comment, name, img };

        fetch('https://shielded-reef-19583.herokuapp.com/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        }).then(res => res.json())
            .then(data => {

                // console.log(data)
                if (data.insertedId) {
                    toast('Review added Successfuly, You can check on Home page Review section ')
                }
                e.target.reset();
            })

        // console.log(review)


    }
    return (
        <div>
            <div className='flex items-center'>
                <img className='w-12 rounded-full mr-2' src={user?.photoURL} alt="" />
                <p className='font-bold'>{user?.displayName}</p>
            </div>
            <h2 className='font-semibold mx-12 mb-5'>Your Review will be Posted Publicaly on the web <span className='link link-accent'>Learn More</span></h2>

            <form onSubmit={handleSubmit} className='w-full sm:w-1/2 sm:pl-40 p-5'>
                <div className='mb-5'>
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <input type="number" placeholder='Rating Count' className="input input-bordered input-success w-full max-w-xs" name="number" min='1' max='5' required />
                </div>


                <div>
                    <textarea rows="7" className='textarea textarea-success ' cols="50" name="comment" placeholder='Describe your exprience...' required>
                    </textarea>
                </div>


                <div className='text-center my-8'>
                    <Link to='/dashboard' className='btn btn-error mr-4'>Cancle</Link>
                    <input type='submit' value='Post' className='btn btn-success' />
                </div>
            </form>
        </div>
    );
};

export default AddReview;