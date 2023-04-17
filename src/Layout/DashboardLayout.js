import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
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
                            <li><a>My Appointment</a></li>
                            <li><a>Sidebar Item 2</a></li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;