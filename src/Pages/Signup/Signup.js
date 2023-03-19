import React from 'react';
import { Link } from 'react-router-dom';
import bg from '../../assets/BG-8.jpg';
import Button from '../Shared/Header/Button';
import { useForm } from "react-hook-form";
import Lottie from 'lottie-react';
import loginAnimation from '../../assets/login-page-animation.json';


const Signup = () => {

    const { register, handleSubmit } = useForm();
    // const [data, setData] = useState("");

    const handleSignUp = data => {
        console.log(data);
    }

    return (
        <div
            style={{

                background: `url(${bg})`,
                backgroundSize: 'cover'
            }}
            className='mt-16 '>
            <section className="sm:h-full md:h-full lg:h-screen">
                <div className="h-full">
                    <div
                        className="g-6 flex  md:h-cover h-full flex-wrap items-center justify-center lg:justify-between">
                        <div
                            className="shrink-1 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
                            <Lottie animationData={loginAnimation}></Lottie>
                        </div>
                        <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
                            <form className='p-5 mx-5 rounded-md' onSubmit={handleSubmit(handleSignUp)}>
                                <div
                                    className="mb-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-white after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                                    <p
                                        className="mx-4 mb-0 md:text-4xl lg:text-5xl text-center font-semibold dark:text-white">
                                        Create An Account
                                    </p>
                                </div>


                                {/* <!-- Name input --> */}

                                <div className="relative mb-5 border-b" data-te-input-wrapper-init>

                                    <input
                                        {...register("Name")}
                                        // autocomplete="off"
                                        type="text"
                                        className="peer placeholder-transparent h-10 w-full border-b-1 border-white text-gray-900 focus:outline-none focus:borer-rose-600 bg-transparent"
                                        placeholder="Your Name" />
                                    <label
                                        // for="email"
                                        className="absolute left-0 -top-3.5 text-white text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-white peer-focus:text-sm">
                                        Your Full Name
                                    </label>
                                </div>

                                {/* Email input */}
                                <div className="relative mb-6 border-b" data-te-input-wrapper-init>
                                    <input
                                        {...register("Email")}
                                        type='email'
                                        className="peer placeholder-transparent h-10 w-full border-b-1 border-white text-gray-900 focus:outline-none focus:borer-rose-600 bg-transparent"
                                        placeholder="Email address" />
                                    <label
                                        // for="exampleFormControlInput2"
                                        className="absolute left-0 -top-3.5 text-white text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-white peer-focus:text-sm">
                                        Email address
                                    </label>
                                </div>
                                {/* Select */}
                                <div className="relative mb-6 " data-te-input-wrapper-init>
                                    <select className='w-full bg-transparent p-1   border-b' {...register("category", { required: true })}>
                                        <option value="">Select One</option>
                                        <option value="Patient">Patient</option>
                                        <option value="Doctor">Doctor</option>
                                    </select>
                                </div>

                                <div className="relative mb-6 border-b bg-transparent" data-te-input-wrapper-init>
                                    <input
                                        {...register("image")}
                                        className='bg-transparent'
                                        type="file" />
                                </div>

                                {/* <!-- Password input --> */}
                                <div className="relative mb-6 border-b" data-te-input-wrapper-init>
                                    <input
                                        {...register("password")}
                                        type="password"
                                        className="peer placeholder-transparent h-10 w-full border-b-1 border-white text-gray-900 focus:outline-none focus:borer-rose-600 bg-transparent"
                                        placeholder="Password" />
                                    <label
                                        // for="exampleFormControlInput22"
                                        className="absolute left-0 -top-3.5 text-white text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-white peer-focus:text-sm bg-transparent">
                                        Password
                                    </label>
                                </div>
                                <div className="text-center lg:text-left">
                                    {/* <p>{data}</p> */}
                                    <Button type="submit">SIGN UP</Button>

                                    <p className="text-base-300 mt-2 mb-0 pt-1 text-sm font-semibold">
                                        Already have an account? <Link className='text-blue-600 font-bold' to='/login'>LOGIN</Link>

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

export default Signup;