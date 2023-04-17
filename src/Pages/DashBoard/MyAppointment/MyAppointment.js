import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const MyAppointment = () => {
    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
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

    return (
        <div className=''>
            <h3 className="text-4xl font-semibold text-slate-300 mt-6 text-center">My Appointment</h3>
            <p className='text-slate-300 text-center mt-2'> Patient Name: {user?.displayName}</p>
            <p className='text-slate-300 text-center mb-5'> Patient Email: {user?.email}</p>
            <div className="overflow-x-auto">
                <table className="table w-full rounded-0">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>DoctorName</th>
                            <th>Speciality</th>
                            <th>Date</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map((booking, i) => <tr className="hover">
                                <th>{i + 1}</th>
                                <td>{booking?.doctorName}</td>
                                <td>{booking?.doctorspeciality}</td>
                                <td>{booking?.appointmentDate}</td>
                                <td>{booking?.appointmentTImeFrom} - {booking?.appointmentTImeTo}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;