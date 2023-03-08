import React, {useState} from 'react';

const NumberRandomInfo = () => {
    const [number, setNumber] = useState('')

    setInterval(function () {
        const randomNumber = Math.ceil(Math.random() * 5)
        setNumber((prevState) => {
            if (randomNumber >=3) {
                return prevState = `Większa lub równa 3: ${randomNumber}`
            }
            return prevState = `Mniejsza lub równa 3: ${randomNumber}`
        })

        }, 10000);

    return (
        <div>{number}</div>
    );
};

export default NumberRandomInfo;