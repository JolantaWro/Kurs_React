import React, {useState} from 'react';

const CountThings = () => {
    const [account, setAccount] = useState(10000)
    const [age, setAge] = useState(33)

    const addAccount = () => {
        setAccount((prevState) => prevState + 1000)
    }
    const addAge = () => {
        setAge((prevState) => prevState + 1)
    }

    return (
        <div>
            <p>💰 so much money: {account}</p>
            <button onClick={addAccount}>Get rich!</button>
            <p>Age: {age}</p>
            <button onClick={addAge}>Get older:</button>
        </div>
    );
};

export default CountThings;