import React, { Component } from 'react';
import HouseList from './components/HouseList';
import './App.css';

class App extends Component {
  render() {
    return(
        <div className="App">
            <HouseList />
        </div>
    );
  }
}

export default App;
