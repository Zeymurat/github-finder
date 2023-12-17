import Navbar from './components/Navbar';
import Search from './components/Search';
import UserList from './components/UserList';
import Alert from './components/Alert';


import React, { Component } from 'react'

export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: false,
      users: [],
      // error: {msg:'Alert Text', type:'warning'}
      error: null
    }
  }

searchUsers=(keyword) => {
  if(keyword.length > 0){
    this.setState({loading:true});
      fetch("https://api.github.com/search/users?q="+keyword)
      .then(response => response.json())
      .then(data => this.setState({ users: data.items, loading: false }));
  }
}

clearSearch=()=>{
  this.setState({users: []});
}

displayAlert = (msg, type) => {
  this.setState({error:{msg: msg, type:type}});
  setTimeout(()=>{
    this.setState({error:null});
  }, 3000);
}

  render() {
    return (
      <div>
        <Navbar />
        <Search displayAlert={this.displayAlert} searchUsers={this.searchUsers} clearSearch={this.clearSearch} showClearButton={this.state.users.length>0?true:false}/>
        <Alert error={this.state.error} />
        <div className="container mt-3">
          <UserList users={this.state.users} loading={this.state.loading} />
        </div>
      </div>
    )
  }
}

export default App

