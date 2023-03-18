import React, { useState } from 'react'
import { Link } from 'react-router-dom';
// import Button from './Button';
import logo from "../../../assets/logo.png"


const Nav = () => {
    let Links = [
        { name: "HOME", link: "/" },
        { name: "CONSULTATION", link: "/consultation" },
        { name: "ABOUT", link: "/" },
        { name: "BLOG'S", link: "/" },
        { name: "CONTACT", link: "/" },
        { name: "LOGIN", link: "/login" },
    ];
    let [open, setOpen] = useState(false);
    return (
        <div className='shadow-md w-full fixed top-0 z-50'>
            <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
                <Link to="/" className='font-bold text-2xl cursor-pointer flex items-center text-gray-800'>
                    <img className='w-52' src={logo} alt="" />
                </Link>

                <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                    <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                </div>

                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}>
                    {
                        Links.map((link) => (
                            <li key={link.name} className='md:ml-8 text-sm md:my-0 my-7'>
                                <Link to={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</Link>
                            </li>
                        ))
                    }
                    {/* <Button>
          Get Started
        </Button> */}
                </ul>
            </div>
        </div>
    )
}

export default Nav