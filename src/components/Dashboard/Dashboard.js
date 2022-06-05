import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import Spinner from '../Hooks/Spinner';
import useAdmin from '../Hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);

    if (adminLoading) {
        return <Spinner></Spinner>
    }
    // console.log(admin)
    return (
        <>


            <div className='mb-20'>

                <div className="drawer h-full drawer-mobile">
                    <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content h-full pt-10">
                        {/* <!-- Page content here --> */}


                        <div className='ml-5'>
                            <label tabIndex="1" htmlFor="dashboard-drawer" className="btn btn-ghost lg:hidden font-bold ml-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                DASHBOARD
                            </label>

                        </div>


                        <div className='container mx-auto text-center mt-8'>
                            <h2 className='text-3xl font-semibold text-red-500'>Hey, <span className='text-blue-500'>{user?.displayName}</span> Welcome To Your DashBoard</h2>
                            <h3 className='text-2xl text-blue-500 font-bold mt-10 mb-10'>Welcome To Acura</h3>
                        </div>



                        <Outlet></Outlet>
                    </div>

                    <div className="drawer-side">
                        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                        <ul className="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
                            {/* <!-- Sidebar content here --> */}
                            <li><Link className='border-black border-2 mb-3' to=''>My Profile</Link></li>
                            {!admin && <li><Link className='border-black border-2 mb-3' to='/dashboard/myorder2'>My Orders</Link></li>}

                            {!admin && <li><Link className='border-black border-2 mb-3' to='/dashboard/addreview'>Add Review</Link></li>}
                            {admin && <li><Link className='border-black border-2 mb-3' to='/dashboard/alluser'>All User</Link></li>}
                            {admin && <li><Link className='border-black border-2 mb-3' to='/dashboard/manageallorders'>Manage All Orders</Link></li>}
                            {admin && <li><Link className='border-black border-2 mb-3' to='/dashboard/addproduct'>Add a Product</Link></li>}
                        </ul>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;