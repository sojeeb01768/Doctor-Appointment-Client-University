import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import Specialist from '../Specialist/Specialist';

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

                    <Specialist key={speciality?._id}
                        speciality={speciality}
                    ></Specialist>


                )
            }
        </div>
    );
};

export default Consultation;