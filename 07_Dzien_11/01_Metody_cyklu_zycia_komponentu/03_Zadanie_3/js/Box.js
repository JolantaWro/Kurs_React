import React, {Component} from 'react';

class Box extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: "green"
        }
    }
    componentDidMount() {
        this.timerID = setInterval(() => {
            this.setState((prev) => {
                if (prev.color === "green") {
                    return {
                        color: "red"
                    }
                }
                return {
                    color: "green"
                }
            })
        }, 5000)
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
    }
    componentWillUnmount() {
    }

    render() {
        return (
            <div style={{backgroundColor: this.state.color, height:"200px", width: "200px"}}></div>
        );
    }
}



export default Box;

