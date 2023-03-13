import React, {Component} from 'react';

class MagicBox extends Component {
    state = {
        color: "#000"
    }

    handleColor = () => {
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16)
        this.setState((prev) => {
            return {
                color: randomColor
            }
        })
    }
    render() {
        return (
            <div style={{backgroundColor: this.state.color, height: "200px", width: "200px"}} onMouseEnter={this.handleColor}>

            </div>
        );
    }
}

export default MagicBox;