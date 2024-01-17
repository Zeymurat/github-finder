import Navbar from './components/Navbar';
import Search from './components/Search';
import UserList from './components/UserList';
import Alert from './components/Alert';
import React from 'react';
import UsersContextProvider from './contexts/usersContext';
import AlertContextProvider from './contexts/alertContext';


const App = () => {
  return (

    <UsersContextProvider>
      <AlertContextProvider>
        <Navbar />
        <Search />
        <Alert />
        <UserList />
      </AlertContextProvider>
    </UsersContextProvider>
  )
}

export default App

