import React, { Component } from 'react';
import './App.css';
import Clock from "./Clock";

class App2 extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Welcome to React</h1>
                    <Clock/>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App2.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default App2;