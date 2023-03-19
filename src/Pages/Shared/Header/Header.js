import React, { useContext, useState } from 'react'
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import logo from "../../../assets/logo.png"
import { AuthContext } from '../../../contexts/AuthProvider';



const Nav = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
        .then(()=>{})
        toast.success("Log out Successful")
    .catch(error => console.log(error))
    }

const menuItems =
    <React.Fragment>
        <li><Link to='/'>HOME</Link></li>
        <li><Link to='/consultation'>CONSULTATION</Link></li>
        <li><Link to='/'>ABOUT</Link></li>
        
        {
            user?.uid ?
                <>
                <li><Link to='/dashboard'>DASHBOARD</Link></li>
                <li><button onClick={handleLogOut} >SIGN OUT</button></li>
                </>
                :
                <li><Link to='/login'>LOGIN</Link></li>
        }

    </React.Fragment>
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

            <ul className={`md:flex md:items-center md:pb-0 pb-12 gap-5 lg:gap-10 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}>
                {menuItems}
            </ul>
        </div>
    </div>
)
}

export default Nav