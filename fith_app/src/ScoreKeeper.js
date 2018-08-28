import React, {Component} from "react";


class ScoreKeeper extends Component {

    constructor(props) {
        super(props);
        this.state={currentScore:this.props.score}
    }

    buttonClick =() =>{
        this.setState({
            currentScore: this.state.currentScore * 2
        })
    };

    render() {

        return <div className="setup">
                <button onClick={this.buttonClick}>Click Me</button>
            <h1>Your Score: {this.state.currentScore}</h1>
        </div>
    }
}

export default ScoreKeeper;