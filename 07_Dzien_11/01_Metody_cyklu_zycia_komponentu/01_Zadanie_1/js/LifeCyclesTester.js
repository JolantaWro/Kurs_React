import React, {Component} from 'react';

class LifeCyclesTester extends Component {
    constructor(props) {
        super(props);
        console.log("constructor");
    }
    render() {
        console.log("render");
        return (
            <p>
                Test
            </p>
        );
    }
    componentDidMount() {
        console.log("komponent został zamontowany");
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("komponent został zaktualizowany");
    }
    componentWillUnmount() {
        console.log("komponent został odmontowany");
    }
}

export default LifeCyclesTester;