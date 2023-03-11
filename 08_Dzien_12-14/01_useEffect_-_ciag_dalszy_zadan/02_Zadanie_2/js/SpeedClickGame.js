import React, {useEffect, useState} from 'react';

const SpeedClickGame = ({time}) => {

    const [timeGame, setTimeGame] = useState(time)
    const [counter, setCounter] = useState(0)
    const [isDisabled, setDisabled] = useState(false)

    const handleClick = () => {
        setCounter((prevState) => prevState + 1)
        setTimeGame((prev) => time - (prev - 50))
    }

    useEffect(() => {
        const intervalClick = setInterval(() => {
            setTimeGame((prevState) => {
                if (prevState !== 0) {
                    return prevState - 50
                } else {
                    setDisabled(true)
                    clearInterval(intervalClick)
                }
            })
        }, 50)
    }, [])

    return (
        <div>
            <button onClick={handleClick} disabled={isDisabled}>Click me!</button>
            <h1>{timeGame}</h1>

            <h2>liczba punktów: {counter}</h2>
        </div>
    );
};

export default SpeedClickGame;