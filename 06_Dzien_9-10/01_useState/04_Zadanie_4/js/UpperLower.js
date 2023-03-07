import React, {useState} from 'react';

const UpperLower = () => {
    const [word, setWord] = useState("kajak")

    const lowerWord = () => {
        setWord((prevState) => prevState.toLowerCase())
    }
    const upperWord = () => {
        setWord((prevState) => prevState.toUpperCase())
    }
    return (
        <div>
            <h2>{word}</h2>
            <button onClick={lowerWord}>Lowercase</button>
            <button onClick={upperWord}>Uppercase</button>
        </div>
    );
};

export default UpperLower;