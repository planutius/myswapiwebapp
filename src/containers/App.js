import React, { Component } from 'react';
import swlogo from './star-wars-logo.svg';
import './App.css';
import Root from '../components/Root';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={swlogo} className="App-logo" alt="logo" />
          <h1 className="App-title">Web App using SWAPI and React Exercise</h1>
        </header>
        <Root className="App-root" />
      </div>
    );
  }
}

export default App;
