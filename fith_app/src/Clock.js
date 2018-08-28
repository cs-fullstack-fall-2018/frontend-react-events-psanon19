import React, { Component } from 'react';
import FormattedDate from "./FormattedDate";

class Clock extends React.Component {
    constructor() {
        super();
        this.state = {date: new Date(),
            name: "Kenn",
            age: 5};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => {this.tick()}, 1000
        );
    }

    buttonClick =() =>{
        this.setState({
            age: this.state.age*10000,
            name: (this.state.name + " Help")
        })
    };

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date(),
            age: this.state.age + 1
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.buttonClick}>Gotta Go Fast</button>
                <FormattedDate date={this.state.date} age={this.state.age}/>
            </div>
        );
    }
}



export default Clock;