import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

const MyPatient = () => {
    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/doctor-appointment?email=${user?.email}`;

    const { data: patients = [] } = useQuery({
        queryKey: ['patients', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json();
            return data;
        }

    })

    console.log(patients);

    return (
        <div className=''>
            <h3 className="text-4xl font-semibold text-slate-300 mt-6 text-center">My Patient</h3>
            <div className='flex justify-evenly items-center my-5'>
                <p className='text-slate-300 text-center font-semibold'> My Name- {user?.displayName}</p>
                <p className='text-slate-300 text-center font-semibold'> My Email- {user?.email}</p>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full rounded-none mb-10">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Patient Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Payment Status</th>


                        </tr>
                    </thead>
                    <tbody>
                        {
                            patients.map((patient, i) => <tr key={patient?._id} className="hover">
                                <th>{i + 1}</th>

                                {/* <td>
                                    <div className="avatar">
                                        <div className="w-12 rounded-full">
                                            <img alt='' src={patient?.doctorImage} />
                                        </div>
                                    </div>
                                </td> */}
                                <td>{patient?.patientName}</td>
                                <td>{patient?.appointmentDate}</td>
                                <td>{patient?.slot}</td>
                                <td>
                                    {
                                        patient?.price && !patient?.paid &&
                                       <span className='text-red-500 font-semibold'>Not Paid</span>
                                    }
                                    {
                                        patient?.price && patient?.paid && <span className='text-green-500 font-semibold'>PAID</span>
                                    }
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyPatient;