import React from 'react';
import { useQuery } from 'react-query';
import Spinner from '../Hooks/Spinner';

const AllUser = () => {
    const { data: users, isLoading } = useQuery('users', () => fetch('http://localhost:5000/users').then(res => res.json()))
    if (isLoading) {
        return <Spinner></Spinner>
    }
    console.log(users)

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
                                <td>{user?.name}</td>
                                <td>{user?.email}</td>
                                <td>
                                    <button className='btn btn-success font-bold'>Make Admin</button>
                                    <p className='mt-2'><button className='btn btn-error font-bold'>Cancel</button></p>
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