import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';


const Specialist = () => {

    const  doctors  = useLoaderData();
    console.log(doctors);

    return (
        <div className='mt-20'>
            {
                doctors.map(doctor=> <div key={doctor._id} >
                    <h2>{doctor?.name}</h2>
                </div> )
            }
        </div>
    );
};

export default Specialist;