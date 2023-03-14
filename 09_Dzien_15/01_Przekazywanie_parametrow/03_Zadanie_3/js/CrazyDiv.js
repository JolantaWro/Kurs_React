import React, {useState} from 'react';

const CrazyDiv = () => {
    const [color, setColor] = useState("red")
    const [top, setTop] = useState('1px');
    const [left, setLeft] = useState('1px');

    const handleDiv = (minValue, maxValue) => {
        const leftValue = Math.floor(Math.random() * (maxValue - minValue) + minValue);
        const topValue = Math.floor(Math.random() * (maxValue - minValue) + minValue);

        setLeft(`${leftValue}px`);
        setTop(`${topValue}px`);
    }

    return (
        <div style={{
            backgroundColor: color,
            width: "100px",
            height: "100px",
            position: "absolute",
            left: left,
            top: top
        }} onMouseEnter={() => handleDiv(0, 1000)}>

        </div>
    );
};

export default CrazyDiv;