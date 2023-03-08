import React from 'react';

const Buttons = () => {
    const clickHandler1 = (e) => {
        e.preventDefault()
        console.log("Pierwszy")
    }
    const clickHandler2 = () => {
        const number1 = parseInt(prompt("podaj liczbe 1"))
        const number2 = parseInt(prompt("podaj liczbe 2"))
        console.log(Math.pow(number1, number2))
        return number1 ** number2
    }
    const clickHandler3 = () => {
        console.log(`Wysokość: ${window.innerHeight} Szerokość: ${window.innerWidth}`)
    }
    return (
        <div>
            <button onClick={clickHandler1}>Klik 1</button>
            <button onClick={clickHandler2}>Klik 2</button>
            <button onClick={clickHandler3}>Klik 3</button>

        </div>
    );
};

export default Buttons;