import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ScoreKeeper from "./ScoreKeeper"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ScoreKeeper score={1}/>
          To get started, edit <code>src/App.js</code> and save to reload.

      </div>
    );
  }
}

export default App;
