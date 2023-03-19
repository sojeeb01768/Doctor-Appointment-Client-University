import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Shared/Header/Button';
import './Login.css';
import bg from '../../assets/BG-8.jpg';
import Lottie from 'lottie-react';
import GoogleLogin from '../../assets/1534129544.svg';
import FacebookLogin from '../../assets/facebook-logo-2019.svg';
import { useForm } from 'react-hook-form';
import animation from '../../assets/loginAnimation-3.json';



const Login = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    // const [data, setData] = useState("");

    const handleLogin = data => {
        console.log(data);
    }

    return (
        <div
            style={{

                background: `url(${bg})`,
                backgroundSize: 'cover'
            }}
            className='mt-20 '>
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
                                <div className="relative mt-6 border-b">
                                    <input
                                        {...register("email", { required: 'Email Is Required' })}
                                        type='email'
                                        className="peer placeholder-transparent h-10 w-full border-b-1 border-white text-gray-900 focus:outline-none focus:borer-rose-600 bg-transparent"
                                        placeholder="Email address"
                                    />
                                    <label
                                        // for="exampleFormControlInput2"
                                        className="absolute left-0 -top-3.5 mb-2 text-white text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-white peer-focus:text-sm">
                                        Email address
                                    </label>
                                </div>
                                {errors.email && <p role="alert" className='text-red-600 text-sm'>{errors.email?.message}</p>}
                                {/* <!-- Password input --> */}
                                <div className="relative mt-6 border-b">
                                    <input
                                        {...register("password",
                                            { required: 'Password Is Required' }
                                        )}
                                        type="password"
                                        className="peer placeholder-transparent h-10 w-full border-b-1 border-white text-gray-900 focus:outline-none focus:borer-rose-600 bg-transparent"
                                        placeholder="Password"
                                    />
                                    <label
                                        // for="exampleFormControlInput22"
                                        className="absolute left-0 -top-3.5  text-white text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-white peer-focus:text-sm bg-transparent">
                                        Password
                                    </label>
                                </div>
                                {errors.password && <p role="alert" className='text-red-600 text-sm'>{errors.password?.message}</p>}
                                <div className="text-center mt-5 lg:text-left">
                                    {/* <p>{data}</p> */}
                                    <Button type="submit">LOGIN</Button>
                                    <p className="text-base-300 mt-2 mb-0 pt-1 text-sm font-semibold">
                                        Don't have any account?
                                        <Link className='text-blue-700 font-bold' to='/signup'>
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