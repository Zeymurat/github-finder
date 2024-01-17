import React, { useContext, useState } from 'react';
import { UsersContext } from '../contexts/usersContext';
import { AlertContext } from '../contexts/alertContext';

const Search = () => {
    const [keyword, setKeyword] = useState('');
    const { searchUsers, users, clearSearch } = useContext(UsersContext);
    const { displayAlert } = useContext(AlertContext);

    const chanceinput = (e) => {
        setKeyword(e.target.value);
    }
    const searchsubmit = (e) => {
        e.preventDefault();
        if (keyword === '') {
            displayAlert('Please Input Any Username', 'danger');
        } else {
            searchUsers(keyword);
            setKeyword('');
        }
    }


    return (
        <div className='container my-3'>
            <form onSubmit={searchsubmit}>
                <div className="input-group mb-3">
                    <input type="text" value={keyword} onChange={chanceinput} className="form-control" placeholder="Username" />
                    <button className="btn btn-outline-primary" type="submit">Search Users</button>
                </div>
            </form>
            {
                users.length>0 && <button className='btn btn-outline-danger mt-2 btn-block' onClick={clearSearch}>Clear Search</button>
            }

        </div>
    )
}


export default Search