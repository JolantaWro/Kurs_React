import React, {useState} from 'react';

const MyButton = () => {

    const [word, setWord] = useState("NIE");
    const handleTurnClick = () => {
        setWord((prevState) => {
            if (prevState === "NIE") {
                return "TAK"
            }
            return "NIE"
        });
    }

    return (
        <div>
            <button onClick={handleTurnClick}>{word}</button>
        </div>
    );
};

export default MyButton;

