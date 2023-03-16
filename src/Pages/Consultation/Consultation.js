import React from 'react';
import { Link } from 'react-router-dom';

const Consultation = () => {

    const specialities = [
        {
            "treatment": "General Physician",
            "desc": "Cold, flu, fever, vomiting, infections, headaches or any other general health issues.",
            "icon": "https://i.ibb.co/cckKZfm/medicine.png"

        },
        {
            "treatment": "Gynecology",
            "desc": "Any women's health related issues including pregnancy, menstruation, fertility issues, hormone disorders etc.",
            "icon": "https://i.ibb.co/2dcd0h8/gynecology.png"

        },
        {
            "treatment": "Child Care / Pediatrics",
            "desc": "Any children's health related issues including physical, behavior and mental health.",
            "icon": "https://i.ibb.co/bd8bw1S/childcare.png"

        },
        {
            "treatment": "Skin / Dermatology",
            "desc": "Treatment of diseases related to skin, hair and nails and some cosmetic problems.",
            "icon": "https://i.ibb.co/0hpsQfb/skin.png"

        },
        {
            "treatment": "Psychiatry",
            "desc": "Diagnosis, prevention, and treatment of mental disorders related to mood, behaviour, cognition, and perceptions.",
            "icon": "https://i.ibb.co/Z6KZPhd/psychistry.png"

        },
        {
            "treatment": "Brain / Neurology",
            "desc": "Diagnosis, treatment for disease involving the central and peripheral nervous systems.",
            "icon": "https://i.ibb.co/1m7DrFL/brain.png"

        },
    ]

    return (

        <div className='mt-32 mx-20 lg:mx-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {
                specialities?.map(speciality =>
                    <Link to={'/specialist'} key={speciality?.id}>
                        <div className="card w-full bg-base-100 shadow-md ">

                            <div className="card-body">
                                <div className='flex gap-4'>
                                    <div>
                                        <img src={speciality?.icon} alt="" />
                                    </div>
                                    <div>
                                        <h2 className="card-title font-bold text-2xl mb-3">{speciality?.treatment}</h2>
                                        <p>{speciality?.desc}</p>
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