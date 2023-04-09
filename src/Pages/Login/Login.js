import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Button from '../Shared/Header/Button';
import './Login.css';
import bg from '../../assets/BG-8.jpg';
import Lottie from 'lottie-react';
import GoogleLogin from '../../assets/1534129544.svg';
import FacebookLogin from '../../assets/facebook-logo-2019.svg';
import { useForm } from 'react-hook-form';
import animation from '../../assets/loginAnimation-3.json';
import { AuthContext } from '../../contexts/AuthProvider';
import { toast } from 'react-hot-toast';



const Login = () => {

    const { signIn } = useContext(AuthContext)

    const { register, formState: { errors }, handleSubmit } = useForm();
    const [loginError, setLoginError] = useState("");

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = data => {
        console.log(data);
        setLoginError("");
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                toast.success("Login Successful")
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error.message);
                setLoginError(error.message);
            })
    }

    return (
        <div
            style={{

                
                backgroundSize: 'cover'
            }}
            className='mt-20  bg-[#0F172A]'>
            {/* <!-- component --> */}
            <section className="sm:h-full md:h-full lg:h-screen">
                <div className="h-full">
                    <div
                        className=" flex h-full flex-wrap items-center justify-center lg:justify-evenly">
                        <div
                            className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-7/12  md:shrink-0 lg:w-4/12 ">
                            <Lottie animationData={animation}></Lottie>
                        </div>
                        <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
                            <div
                                className="flex flex-row mt-5 items-center justify-center ">
                                <p className="mb-0 mr-4 text-2xl text-white">Sign in with</p>
                                <button
                                    // type="button"
                                    className="mx-1 h-9 w-9 rounded-full uppercase leading-normal text-white  transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
                                    {/* <!-- Google --> */}
                                    <img src={GoogleLogin} alt="" />
                                </button>
                                <button
                                    // type="button"
                                    className="mx-1 h-9 w-9 rounded-full uppercase leading-normal text-white  transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
                                    {/* <!-- Facebook --> */}
                                    <img src={FacebookLogin} alt="" />
                                </button>
                            </div>
                            <form className='p-5 mx-5 rounded-md' onSubmit={handleSubmit(handleLogin)}>
                                <div
                                    className="mb-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-white after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                                    <p
                                        className="mx-4 mb-4 md:text-3xl lg:text-5xl  text-center font-semibold dark:text-white">
                                        Login Your Account
                                    </p>
                                </div>
                                {/* Email input */}
                                <div className="relative mt-6 ">
                                    <p className='text-white mb-3'>Enter your Email</p>
                                    <input
                                        {...register("email",
                                            {
                                                required: 'Email Is Required'
                                            }
                                        )}
                                        type='email'
                                        className="h-10 w-full p-2  text-black   "
                                        placeholder="Email address"
                                    />
                                    <label
                                        // for="exampleFormControlInput2"
                                        // className="absolute left-0 -top-3.5 mb-2 text-white text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-white peer-focus:text-sm"
                                        >
                                        Email address
                                    </label>
                                </div>
                                {errors.email && <p role="alert" className='text-red-600 text-sm'>{errors.email?.message}</p>}
                                {/* <!-- Password input --> */}
                                <div className="relative">
                                <p className='text-white mb-3'>Enter your Password</p>
                                    <input
                                        {...register("password",
                                            {
                                                required: 'Password Is Required',
                                                minLength: { value: 6, message: "Password must be atleast 6 characters" }
                                            }

                                        )}
                                        type="password"
                                        className="h-10 w-full p-2 "
                                        placeholder="Password"
                                    />
                                    <label
                                        // for="exampleFormControlInput22"
                                        // className="absolute left-0 -top-3.5  text-white text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-white peer-focus:text-sm bg-transparent"
                                        >
                                        Password
                                    </label>
                                </div>
                                {errors.password && <p role="alert" className='text-red-600 text-sm'>{errors.password?.message}</p>}
                                <div className="text-center mt-5">
                                    <div className='mb-3'>
                                        {loginError && <p className='text-red-600 text-sm'>{loginError}</p>}
                                    </div>

                                    <Button type="submit">LOGIN</Button>
                                    <p className="text-base-300 mt-5 mb-0 pt-1 text-sm font-semibold">
                                        New to <span className='font-bold'>Doctorian? </span>
                                        <Link className='text-[#E18B01] font-bold ml-1' to='/signup'>
                                             Create An Account
                                        </Link>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;