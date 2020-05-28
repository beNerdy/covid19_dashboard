import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  componentDidMount(){
    document.body.style.backgroundColor = "#061325"
  }
  render() {
    return (
      <div className="App">
       <Dashboard name="saursav"></Dashboard>
      </div>
    );
  }
}

export default App;
