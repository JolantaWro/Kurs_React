import React, {Component} from 'react';

class HoverEventClass extends Component {
    onElementClass = () => {
        console.log("Najechano na przycisk!")
    }
    render() {
        return (
            <div>
                <button onMouseEnter={this.onElementClass}>Przycisk 2</button>
            </div>
        );
    }
}

export default HoverEventClass;