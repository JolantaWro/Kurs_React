import React, {useState, useEffect} from "react";

const Box = () => {
    const [color, setColor] = useState("cornflowerblue");

    useEffect(() => {
        setTimeout(() => {
            setColor("tomato");
        }, 2000)
    }, []);

    return (
        <div style={{
            width: "200px",
            height: "200px",
            backgroundColor: color
        }} />
    );
};

export default Box;