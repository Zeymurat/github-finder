import Navbar from './components/Navbar';
import Search from './components/Search';
import UserList from './components/UserList';
import Alert from './components/Alert';
import React, { useState } from 'react'

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchUsers = (keyword) => {
    if (keyword.length > 0) {
      setLoading(true);
      fetch("https://api.github.com/search/users?q=" + keyword)
        .then(response => response.json())
        .then(data => {
          setUsers(data.items);
          setLoading(false);
        });
    }
  }

  const clearSearch = () => {
    setUsers([]);
    
  }

  const displayAlert = (msg, type) => {
    setError({msg: msg, type: type});
    
    setTimeout(() => {
      setError(null)
    }, 3000);
  }

    return (
      <div>
        <Navbar />
        <Search displayAlert={displayAlert} searchUsers={searchUsers} clearSearch={clearSearch} showClearButton={users.length > 0 ? true : false} />
        <Alert error={error} />
        <div className="container mt-3">
          <UserList users={users} loading={loading} />
        </div>
      </div>
    )
  }

export default App

