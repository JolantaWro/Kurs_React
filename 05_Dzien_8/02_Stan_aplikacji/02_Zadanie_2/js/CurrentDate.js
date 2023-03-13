import React, {Component} from 'react';

class CurrentDate extends Component {
    state = {
        date: new Date().toLocaleString()
    }
    handleClick = () => {
        this.setState((prev) => {
            return {
                date: new Date().toLocaleString()
            }
        })

    }
    render() {
        return (
            <div>
                {this.state.date}
                <div>
                    <button onClick={this.handleClick}>Aktualizuj</button>
                </div>
            </div>

        );
    }
}

export default CurrentDate;