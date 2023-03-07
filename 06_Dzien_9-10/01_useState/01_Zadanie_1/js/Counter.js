import React, {useState} from 'react';

const Counter = () => {
    const [counter, setCounter] = useState(10)
    const addHandleClick = () => {
        setCounter((prevState) => prevState + 1)
    }
    const subtractHandleClick = () => {
        setCounter((prevState) => prevState - 1)
    }
    const restCounter = () => {
        setCounter((prevState) => prevState = 10)
    }
    return (
        <div>
            <h2>Liczba kliknięć {counter}</h2>
            <button onClick={subtractHandleClick}>-</button>
            <button onClick={addHandleClick}>+</button>
            <button onClick={restCounter}>Reset</button>
        </div>
    );
};

export default Counter;