import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Loading from '../../Shared/Loading/Loading';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import { toast } from 'react-hot-toast';

const ManageDoctors = () => {

    const [deleteDoctor, setDeleteDoctor] = useState(null)

    const closeModal = () => {
        setDeleteDoctor(null)
    }



    const { data: alldoctors, isLoading, refetch } = useQuery({
        queryKey: ['alldoctors'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/alldoctors', {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                });
                const data = await res.json();
                return data;
            }
            catch (error) {

            }
        }
    })

    const handleDeleteDoctor = (doctor) => {
        fetch(`http://localhost:5000/alldoctors/${doctor._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success(`${doctor?.name} Delete Successful`)
                    refetch();
                }
                // console.log(data);

            })

    }



    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className='text-center text-white text-4xl mt-10'>Manage Doctors</h2>
            <h2 className='text-center text-white text-3xl mb-10 mt-5'>Numbers Of Doctors : {alldoctors?.length}</h2>

            <div className="overflow-x-auto">
                <table className="table w-full rounded-none mb-10">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Specialities</th>
                            <th>Hospital</th>
                            <th></th>


                        </tr>
                    </thead>
                    <tbody>
                        {
                            alldoctors?.map((doctor, i) => <tr key={doctor?._id} className="hover">
                                <th>{i + 1}</th>


                                <td>
                                    <div className="avatar">
                                        <div className="w-14 rounded-full">
                                            <img alt='' src={doctor?.image} />
                                        </div>
                                    </div>
                                </td>

                                <td>{doctor?.name}</td>
                                <td>{doctor?.specialities}</td>
                                <td>{doctor?.hospital}</td>
                                <td>
                                    <label onClick={() => setDeleteDoctor(doctor)} htmlFor="confirmation-modal" className="btn btn-sm btn-error text-white">Delete</label>
                                </td>

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deleteDoctor && <ConfirmationModal
                    title={`Are you sure? You Want to delete?`}
                    message={`Dr. ${deleteDoctor?.name} Will be Permanently Delete`}
                    successAction={handleDeleteDoctor}
                    successButtonName="Delete"
                    modalData={deleteDoctor}
                    closeModal={closeModal}
                ></ConfirmationModal>
            }
        </div>
    );
};

export default ManageDoctors;