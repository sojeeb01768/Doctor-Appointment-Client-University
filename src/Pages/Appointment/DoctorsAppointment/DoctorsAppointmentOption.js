import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import { Link, useLocation } from 'react-router-dom';

const DoctorsAppointmentOption = ({ appointment, setDoctorForTreatment }) => {
    const { user } = useContext(AuthContext)
    // console.log(user);
    const location = useLocation();

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

                    {

                        user ?

                            (<label
                                disabled={slots?.length === 0}
                                htmlFor="booking-modal"
                                className=" btn bg-[#07acf3] hover:bg-[#38BDF8] border-none text-md text-white  py-2 px-2 rounded 
               font-semibold "
                                onClick={() => setDoctorForTreatment(appointment)}
                            >

                                Book Appointment
                            </label>)
                            :
                            (
                                <Link to={'/login'} state={{ from: location }} className="btn  bg-[#07acf3] hover:bg-[#38BDF8] border-none text-md text-white  px-2 rounded 
                    font-semibold ">Please Login First</Link>
                            )

                    }



                </div>
            </div>
        </div>
    );
};

export default DoctorsAppointmentOption;