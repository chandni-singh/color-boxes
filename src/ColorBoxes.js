import React, { Component } from 'react';
import Box from './Box';
import './ColorBoxes.css';

class ColorBoxes extends Component {
    // Number of boxes to display and set of colors
    static defaultProps = {
        boxNums : 16,
        allColors : ["pink", "blue", "orange", "purple", "slateblue", "red", "green", "cyan", "magenta", "violet", "brown", "yellow", "gray", "black"]
    }

    render() {
        // Render Box component boxNums time and save in an array
        let boxes = Array.from({length : this.props.boxNums}).map(() => <Box colors = {this.props.allColors} />);

        // Display array of Boxes
        return (
            <div className = "ColorBoxes">
                {boxes}
            </div>    
        )
    }
}

export default ColorBoxes;