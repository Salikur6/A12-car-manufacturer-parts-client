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
            <div className='px-10 mb-20'>

                <div class="drawer h-full drawer-mobile">
                    <input id="dashboard-drawer" type="checkbox" class="drawer-toggle" />
                    <div class="drawer-content h-full pt-10">
                        {/* <!-- Page content here --> */}
                        <div>



                            <Outlet></Outlet>
                        </div>


                    </div>

                    <div class="drawer-side">
                        <label for="dashboard-drawer" class="drawer-overlay"></label>
                        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
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