import React, {useEffect, useState} from 'react';

const AnotherColor = () => {

    const [color, setColor] = useState("yellow")

    useEffect(() => {
        const timeColor = setTimeout(() => {
            setColor((prev) => "blue")
        }, 5000);
        return() => {
            clearTimeout(timeColor)
        };
    }, [])

    return (
        <div style={{
            weight: "200px",
            height: "200px",
            background: color
        }}>

        </div>
    );
};

export default AnotherColor;