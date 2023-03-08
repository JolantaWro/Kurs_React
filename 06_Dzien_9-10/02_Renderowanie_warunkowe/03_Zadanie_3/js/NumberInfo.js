import React from 'react';

const NumberInfo = (props) => {

    const checkNumberFirst = (number) => {
        if (number > 1) {
            for(let i = 2; i<number; i++) {
                if (number % i === 0) {
                    return false
                } else {
                    return true
                }

            }
        } else {
            "Błąd"
        }
    }

    return (
        <div>
            <ul>
                {<li>{props.number}</li>}
                {props.number % 2 === 0 && <li>Parzysta</li>}
                {props.number % 2 !== 0 && <li>Nieparzysta</li>}
                {checkNumberFirst(props.number) && <li>Liczba pierwsza</li>}
            </ul>
        </div>
    );
};

export default NumberInfo;