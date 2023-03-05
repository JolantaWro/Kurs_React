import React, {Component} from "react";

class Hello2 extends Component {
    render() {
        return (
            <h1>Hello, {this.props.name} {this.props.surname}</h1>
        )
    }

}

export default Hello2;