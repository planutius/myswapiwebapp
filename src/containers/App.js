import React, { Component } from 'react';
import swlogo from './star-wars-logo.svg';
import './App.css';
import Menu from '../components/Menu';
import Scroll from '../components/Scroll';
import CardList from '../components/CardList';
class App extends Component {
  constructor() {
    super()
    this.state = {
      url:'',
      option:'',
      items: []
    }
  }

  componentDidMount() {
    
    fetch(this.state.url)
    .then(response => response.json())
    .then(results => {
            this.setState({
              items:  results
            });
          }
    );
  }
  
  onMenuClick = (event) => {

    this.setState({
      url: event.target.value,
      option: event.target.key
    });

  }

  componentDidUpdate() {
    fetch(this.state.url)
    .then(response => response.json())
    .then(results => {
            this.setState({
              items:  results,

            });
          }
    );
  }

  render() {
    
    return (
        <div className="App">
          <header className="App-header">
            <img src={swlogo} className="App-logo" alt="logo" />
            <h1 className="App-title">Web App using SWAPI and React Exercise</h1>
          </header>
          <Menu className="App-menu" menuClick={this.onMenuClick} />
          <Scroll>
            <CardList datos={this.state.items} option={this.state.option}/>
          </Scroll>
        </div>
    );
  }
}

export default App;
