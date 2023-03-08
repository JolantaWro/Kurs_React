import React, {Component} from 'react';

class RandomNumbers extends Component {
    state = {
        numbers: []
    }
    addNumber = () => {
        function getRandomInt(min, max) {
            min = Math.ceil(min)
        }
    }
    render() {
        return (
            <div>
                <button onClick={addNumber}>add number</button>
                <ul>
                    {
                        this.state.numbers.map((el, i) => <li key={i}>{el}</li>)
                    }

                </ul>
            </div>
        );
    }
}

export default RandomNumbers;