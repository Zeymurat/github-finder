import React, { useState } from 'react';

const Search = ({ displayAlert, searchUsers, showClearButton, clearSearch }) => {
    const [keyword, setKeyword] = useState('');

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
                showClearButton && <button className='btn btn-outline-danger mt-2 btn-block' onClick={clearSearch}>Clear Search</button>
            }

        </div>
    )
}


export default Search