import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Specialities = ({ speciality }) => {
    const { id } = speciality

    // const [specialist, setSpecialist] = useState([]);
    // console.log(specialist);

    // useEffect(() => {
    //     fetch(`http://localhost:5000/consult/${id}`)
    //         .then(response => response.json())
    //         .then(data => setSpecialist(data));
    // }, [id]);
   

    return (
        <div className='mt-20'>
            <Link to={`/specialist/${id}`}>
                <div className="card w-full bg-base-100 shadow-md border">

                    <div className="card-body ">
                        <div className=' lg:flex md:justify-center md:items-center lg:justify-center lg:items-center gap-4'>
                            <div className='mx-auto w-28 lg:w-44'>
                                <img src={speciality?.icon} alt="" />
                            </div>
                            <div className='lg:p-2'>
                                <h2 className=" lg:text-left sm:text-center font-bold text-2xl mb-3">{speciality?.treatment}</h2>
                                <p className=' lg:text-left sm:text-left lg:pr-7'>{speciality?.desc}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Specialities;