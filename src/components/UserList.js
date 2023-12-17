import React, { Component } from 'react'
import User from './User';
import Loading from './Loading';

export class UserList extends Component {
    
    render() {
        if(this.props.loading){
            return <Loading/>
        }
        return (

            <div>
                {this.props.users.map(user => (
                    <User key={user.id} user={user} />
                ))}
            </div>
        )
    }
}

export default UserList