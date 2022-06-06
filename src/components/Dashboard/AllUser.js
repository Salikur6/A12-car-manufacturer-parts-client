import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Spinner from '../Hooks/Spinner';

const AllUser = () => {
    const navigate = useNavigate();
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://shielded-reef-19583.herokuapp.com/users').then(res => res.json()))
    if (isLoading) {
        return <Spinner></Spinner>
    }


    // console.log(users)


    const handleAdmin = (email) => {
        // console.log(email);

        fetch(`https://shielded-reef-19583.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('access-token')}`
            }

        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    navigate('/')
                    toast.error('Failed to Make Admin')
                }
                return res.json()
            })
            .then(data => {
                console.log(data)

                refetch()
                toast.success('Successfully Made an Admin')
            })
    }

    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Modify</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user?._id}>
                                <th>{index + 1}</th>
                                <td>{user?.name} {user?.role === 'admin' && <div class="badge badge-primary">Admin</div>
                                }</td>
                                <td>{user?.email}</td>
                                <td>


                                    {user?.role !== 'admin' && <button className='btn btn-success font-bold' onClick={() => handleAdmin(user?.email)}>Make Admin</button>}


                                    <p className='mt-2'><button className='btn btn-error font-bold'>Remove User</button></p>
                                </td>
                                <td>

                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUser;