import React from 'react';
import './Banner.css';
import doctor from '../../../assets/doctor.json'
import Lottie from 'lottie-react'

const Banner = () => {
    return (
        <div className='bg-img'>
            <div className="hero min-h-screen my-10">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className='container'>
                    <Lottie animationData={doctor} ></Lottie>
                    </div>
                    <div className='ml-5'>
                        <h1 className="text-6xl font-bold">Complete Health Solution</h1>
                        <p className="py-6 text-xl">Consulting a healthcare professional, buying medicine, ordering lab tests
                            and improving your health and wellbeing, all can be done 24/7 with Doctorian</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;