import React, {Component} from 'react';
import './Box.css';
import { choice } from './helpers';

class Box extends Component {
    
    // Initailize state with a random color
    constructor(props) {
        super(props);
        this.state = {
            color : choice(this.props.colors)
        }
        this.genColor = this.genColor.bind(this);
    }

    // update state with a random color with no repeats
    genColor() {
        let newColor;
        do {
            newColor = choice(this.props.colors);
        } while (newColor === this.state.color)

        this.setState( { color : newColor });
    }

    // display box with thw random color and handle click events
    render() {
        return(
            <div className = "Box" style = {{backgroundColor : this.state.color}} onClick = {this.genColor} ></div>
        )
    }
}

export default Box;