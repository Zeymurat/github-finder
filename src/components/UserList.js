import React from 'react'
import User from './User';
import Loading from './Loading';

const UserList = ({loading, users}) => {

        if (loading) {
            return <Loading />
        }
        return (

            <div>
                {users.map(user => (
                    <User key={user.id} user={user} />
                ))}
            </div>
        )
    }
export default UserList