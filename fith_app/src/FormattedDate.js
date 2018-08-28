import React, { Component } from 'react';

class FormattedDate extends React.Component {
    render()
    {
        return <h2>It is {this.props.date.toLocaleTimeString()}. And Kenn is {this.props.age}</h2>;
    }
}

export default FormattedDate;