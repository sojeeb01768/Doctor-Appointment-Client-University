import React from 'react';
import { useLoaderData } from 'react-router-dom';

const DoctorsDetails = () => {
    const doctor = useLoaderData();
    console.log(doctor);

    return (
        <div className='mt-20 mx-auto text-center text-4xl'>
            <h2>{doctor?.name}</h2>
        </div>
    );
};

export default DoctorsDetails;