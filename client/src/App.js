import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import NavBar from './NavBar'
import Main from './Main'

class App extends Component {
  state = {
    res: ''
  }
  componentDidMount(){
    axios.get('/api').then((res)=>{
      console.log(res)
    })
  }

  render() {
    return (
      <div className="container-fluid">
        <NavBar />
        <Main />
      </div>
    );
  }
}

export default App;
