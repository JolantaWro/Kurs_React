import React, {Component} from "react";

class AddNumbers2 extends Component {
    render() {
        const {numberA, numberB} = this.props
        return (
            <h1>{numberA + numberB}</h1>
        )
    }
}
export default AddNumbers2;