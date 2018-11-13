import React, { Component } from 'react';
import swlogo from './star-wars-logo.svg';
import './App.css';
import Options from '../components/Options';
import Scroll from '../components/Scroll';
import CardList from '../components/CardList';
//import GetData from '../components/GetData';

class App extends Component {
  constructor() {
    super()
    this.state = {
      
      items: []
    }
  }

  componentWillMount() {

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(items => this.setState({items: items}));

  }

  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={swlogo} className="App-logo" alt="logo" />
          <h1 className="App-title">Web App using SWAPI and React Exercise</h1>
        </header>
        <Options />
        <Scroll>
          <CardList datos={this.state.items} />
        </Scroll>
      </div>
    );
  }
}

export default App;
