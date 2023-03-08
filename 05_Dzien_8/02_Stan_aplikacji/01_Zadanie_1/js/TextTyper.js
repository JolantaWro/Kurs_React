import React, {Component} from 'react';

class TextTyper extends Component {
    state = {
        text: this.props.text,
        index: 1
    }
    addHandler = () => {
        this.setState((prevState) => {
            return {
                index: prevState.index + 1
            }
        })
    }
    subtractHandler = () => {
        this.setState((prevState) => {
            return {
                index: prevState.index - 1
            }
        })

    }
    render() {
        const {text, index} = this.state
        return (
            <div>
                <h2>{text.slice(0, index)}</h2>
                <button onClick={this.subtractHandler}>-</button>
                <button onClick={this.addHandler}>+</button>

            </div>
        );
    }
}

export default TextTyper;