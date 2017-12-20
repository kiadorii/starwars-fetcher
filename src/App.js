import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      peeps: []
    };
  }
  componentDidMount() {
    fetch('https://swapi.co/api/people')
      .then(json => {
        return json.json();
      })
      .then(starWarsChars => {
        this.setState({ peeps: starWarsChars.name });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Kia's App</h1>
        </header>
      </div>
    );
  }
}

export default App;
