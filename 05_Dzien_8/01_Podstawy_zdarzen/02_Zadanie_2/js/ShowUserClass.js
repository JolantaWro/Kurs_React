import React, {Component} from 'react';

class ShowUserClass extends Component {
    clickHandler = () => {
        console.log(this.props.name, this.props.surname)
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Pokaż dane</button>
            </div>
        );
    }
}

export default ShowUserClass;