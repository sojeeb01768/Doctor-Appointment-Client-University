import React from 'react';
import { useLoaderData } from 'react-router-dom';

const DoctorsDetails = () => {
    const doctor = useLoaderData();
    console.log(doctor);
    
    return (
        <div className='mt-20'>
            <h2>This is details</h2>
        </div>
    );
};

export default DoctorsDetails;