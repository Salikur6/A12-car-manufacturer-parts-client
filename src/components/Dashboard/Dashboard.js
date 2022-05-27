import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    return (
        <>

            <div className='container mx-auto text-center mt-8'>
                <h2 className='text-3xl font-semibold text-red-500'>Hey, <span className='text-blue-500'>{user?.displayName}</span> Welcome To Your DashBoard</h2>
                <h3 className='text-2xl text-blue-500 font-bold mt-10 mb-10'>Welcome To Acura</h3>
            </div>
            <div className='mb-20'>

                <div className="drawer h-full drawer-mobile">
                    <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content h-full pt-10">
                        {/* <!-- Page content here --> */}
                        <div>



                            <Outlet></Outlet>
                        </div>


                    </div>

                    <div className="drawer-side">
                        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                            {/* <!-- Sidebar content here --> */}
                            <li><Link to=''>My Orders</Link></li>
                            <li><Link to='/dashboard/myprofile'>My Profile</Link></li>
                            <li><Link to='/dashboard/addreview'>Add Review</Link></li>
                        </ul>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;