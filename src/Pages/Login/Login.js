import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Shared/Header/Button';
import './Login.css';


const Login = () => {
    return (
        <div className='login-bg-img'>
            <div className='mt-20'>
                {/* <!-- component --> */}
                <div class="min-h-screen  py-6 flex flex-col justify-center sm:py-12">
                    <div class="relative py-3 sm:max-w-xl sm:mx-auto">
                        <div
                            class="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-700 shadow-lg transform -skew-y-12 sm:skew-y-0 sm:-rotate-12 sm:rounded-2xl">
                        </div>
                        <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                            <div class="max-w-md mx-auto">
                                <div>
                                    <h1 class="text-2xl font-semibold text-blue-600">LOGIN TO THE DOCTORIAN</h1>
                                </div>
                                <div class="divide-y divide-gray-200">
                                    <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                        <div class="relative">
                                            <input id="email" name="email" type="text" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
                                            <label for="email" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
                                        </div>
                                        <div class="relative">
                                            <input autocomplete="off" id="password" name="password" type="password" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
                                            <label for="password" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
                                        </div>
                                        <div class="relative">
                                            <Button>LOGIN</Button>
                                        </div>
                                        <h2 className='text-sm'>Don't have any account? please <Link className='text-blue-600 font-bold' to='/signup'>SIGN UP</Link> </h2>
                                    </div>
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