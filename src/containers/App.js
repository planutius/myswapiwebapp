import React, { Component } from 'react';
import swlogo from './star-wars-logo.svg';
import './App.css';
import Options from '../components/Options';
import Scroll from '../components/Scroll';
import CardList from '../components/CardList';
import getData from '../components/GetData';

class App extends Component {
  constructor() {
    super()
    this.state = {
      url:'https://swapi.co/api/',
      items: []
    }
  }

  componentDidMount() {
    
    fetch(this.state.url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          items: data
        });
      });

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
