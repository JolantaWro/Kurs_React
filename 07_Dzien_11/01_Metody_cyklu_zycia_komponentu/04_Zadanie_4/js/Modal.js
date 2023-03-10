import React, {Component} from 'react';

class Modal extends Component {
    state = {
        modalOpen: false
    }
    render() {
        return (
            <>
                <h2>{this.state.modalOpen ? this.props.heading : ""}</h2>
            </>
        );
    }
    componentDidMount() {
        this.timeoutID = setTimeout(() => {
            this.setState({modalOpen: true})
        }, 5000);
    }
}

export default Modal;