import React from 'react';

const DoctorsAppointmentOption = ({ appointment, setDoctorForTreatment }) => {

    const { name, slots, designation, specialities, hospital, price } = appointment; //appointment is treatment

    return (
        <div className="card  shadow-lg border mx-5">
            <div className="card-body text-center ">
                <h2 className="card-title mx-auto">Dr. {name}</h2>
                <h4>Designation: {designation}</h4>
                <h4>Specialities: {specialities}</h4>
                <h4>Hospital: {hospital}</h4>
                <h4> Price: {price} Tk</h4>
                <p >{slots.length > 0 ? slots[0] : <span className='text-red-600' >Slot Not Available</span>}</p>
                <p>{slots.length} {slots.length > 1 ? "Spaces" : "Space"}  Available</p>
                <div className="card-actions justify-center">
                    {/* The button to open modal */}
                    <label
                        disabled={slots?.length === 0}
                        htmlFor="booking-modal"
                        className=" btn bg-[#38BDF8] border-none text-md text-white  py-2 px-2 rounded 
                       font-semibold "
                        onClick={() => setDoctorForTreatment(appointment)}
                    >

                        Book Appointment
                    </label>

                </div>
            </div>
        </div>
    );
};

export default DoctorsAppointmentOption;