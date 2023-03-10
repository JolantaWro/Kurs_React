import React, {Component} from 'react';

class HelloWorld extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "Hello, World!"
        }
        console.log("constructor");
    }
    render() {
        console.log("render");
        return (
            <p>
                {this.state.text}
            </p>
        );
    }
    componentDidMount() {
        this.timerID = setTimeout(() => {
            this.setState({text: "Hi, Everyone!"})
        }, 5000)
        console.log("komponent został zamontowany");
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("komponent został zaktualizowany");
    }
    componentWillUnmount() {
        console.log("komponent został odmontowany");
    }
}

export default HelloWorld;