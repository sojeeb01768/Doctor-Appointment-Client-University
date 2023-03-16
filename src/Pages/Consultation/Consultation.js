import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Consultation = () => {

    const [specialities, setSpecialities] = useState([])
    // console.log(specialities);

    useEffect(() => {
        fetch('http://localhost:5000/consultation')
            .then(response => response.json())
            .then(data => setSpecialities(data));
    }, []);

    return (

        <div className='mt-32 mx-20 lg:mx-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                specialities?.map(speciality =>
                    <Link to={'/specialist'} key={speciality?.id}>
                        <div className="card w-full bg-base-100 shadow-md border">

                            <div className="card-body ">
                                <div className=' lg:flex md:justify-center md:items-center lg:justify-center lg:items-center gap-4'>
                                    <div className='mx-auto w-28 lg:w-44'>
                                        <img src={speciality?.icon} alt="" />
                                    </div>
                                    <div className='p-2'>
                                        <h2 className=" lg:text-left sm:text-center font-bold text-2xl mb-3">{speciality?.treatment}</h2>
                                        <p className=' lg:text-left sm:text-center lg:pr-7'>{speciality?.desc}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                )
            }
        </div>
    );
};

export default Consultation;