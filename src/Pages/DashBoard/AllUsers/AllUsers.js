import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-hot-toast';
import Loading from '../../Shared/Loading/Loading';

const AllUsers = () => {

    const { data: users = [], refetch, isLoading } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users');
            const data = await res.json();
            return data;
        }
    })
    // console.log(users);

    const handleMakeAdmin = id => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Make Admin Successful.')
                    refetch();
                }
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h3 className="text-4xl font-semibold text-slate-300 mt-10 text-center">All Users</h3>
            <h3 className="text-2xl font-semibold text-slate-300 mb-10 text-center">Number of Users: {users?.length}</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Category</th>
                            <th>Admin</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, i) => <tr key={user?._id} className="hover">
                                <th>{i + 1}</th>
                                <td >{user?.name}</td>
                                <td>{user?.email}</td>
                                <td>{user?.category}</td>
                                <td>
                                    {
                                        user?.category !== 'admin' &&
                                        <button onClick={() => handleMakeAdmin(user?._id)} className='btn btn-xs btn-accent'>Make Admin</button>
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

export default AllUsers;