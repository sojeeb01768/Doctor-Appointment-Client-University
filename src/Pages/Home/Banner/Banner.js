import React from 'react';
import image from '../../../assets/images/chair.png'

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200 my-10">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={image} className=" max-w-xl lg:max-w-2xl  rounded-lg shadow-2xl" alt='' />
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