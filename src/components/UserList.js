import React from 'react'
import User from './User';
import Loading from './Loading';

const UserList = (props) => {

        if (props.loading) {
            return <Loading />
        }
        return (

            <div>
                {props.users.map(user => (
                    <User key={user.id} user={user} />
                ))}
            </div>
        )
    }
export default UserList