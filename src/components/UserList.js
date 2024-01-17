import React, { useContext } from 'react'
import User from './User';
import Loading from './Loading';
import { UsersContext } from '../contexts/usersContext';

const UserList = () => {
    const {loading,users} = useContext(UsersContext);

        if (loading) {
            return <Loading />
        }
        return (

            <div className="container mt-3">
                {users.map(user => (
                    <User key={user.id} user={user} />
                ))}
            </div>
        )
    }
export default UserList