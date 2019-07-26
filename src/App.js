import React, { Component } from 'react'
import './App.css';
import Timer from './timer';


class App extends Component {
  constructor(props) {
    super(props)
  }
    render(){
      return (
        <div className="App">
          <Timer />
        </div>
      );
    }
  }

export default App;
