import React from 'react';

const NumberInfo = (props) => {
    const checkNumberPower = (number) => {
        if (number == 0) {
            return false
        } else if (number % 2 === 1) {
            return false
        } else if (number % 2 === 0) {
            return true
        } else {
            return checkNumberPower(number / 2)
        }
    }

    const checkNumberFirst = (number) => {
        if (number > 1) {
            for(let i = 2; i< number; i++) {
                if (number % i == 0) {
                    return false
                } else {
                    return true
                }
            }
        } else {
            return false
        }
    }

    return (
        <div>
            <ul>
                {<li>{props.number}</li>}
                {props.number % 2 === 0 && <li>Parzysta</li>}
                {props.number % 2 !== 0 && <li>Nieparzysta</li>}
                {checkNumberFirst(props.number) && <li>Liczba pierwsza</li>}
                {checkNumberPower(props.number) && <li>Potęga liczby 2 </li>}
            </ul>
        </div>
    );
};

export default NumberInfo;