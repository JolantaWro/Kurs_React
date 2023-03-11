import React, {Component} from 'react';
import ClockTime from "./ClockTime";
import ClockDate from "./ClockDate";

class Clock extends Component {
    state = {
        myData: new Date()
    }

    render() {
        return (
            <div>
                <ClockTime myData={this.state.myData} />
                <ClockDate myData={this.state.myData} />
            </div>
        );
    }


    componentDidMount() {
        this.intervalMy = setInterval(() => {
            this.setState({myData: new Date()})
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.intervalMy);
    }

}

export default Clock;