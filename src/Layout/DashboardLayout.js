import React, { useContext } from 'react';
import Header from '../Pages/Shared/Header/Header';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import { AuthContext } from '../contexts/AuthProvider';

const DashboardLayout = () => {

    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)

    return (
        <div>
            <Header></Header>
            <div className='bg-[#2c3c5f] -2xl mt-20'>
                <div className="drawer drawer-mobile ">
                    <input id="dashboard" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        <Outlet></Outlet>
                        {/* <!-- Page content here --> */}


                    </div>
                    <div className="drawer-side ">
                        <label htmlFor="dashboard" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80 shadow-2xl bg-[#F8FAFC]  text-gray-800">
                            <li><Link to='/dashboard'>My Appointment</Link></li>
                            {
                                isAdmin &&
                                <li><Link to='/dashboard/allusers'>All Users</Link></li>

                            }
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;