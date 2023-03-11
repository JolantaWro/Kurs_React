import React, {Component} from 'react';

class StrobeLight extends Component {
    state = {
        color: "white"
    }

    render() {
        return (
            <div style={{
                backgroundColor: this.state.color,
                height: "50px",
                weight: "500px"
            }}>

            </div>
        );
    }
    componentDidMount() {
        this.intervalID = setInterval(() => {
            this.setState((prev) => {
                if (prev.color === "white") {
                    return {
                        color: this.props.color
                    }
                }
                return {
                    color: "white"
                }
            })
        }, this.props.frequency)
    }
}

export default StrobeLight;