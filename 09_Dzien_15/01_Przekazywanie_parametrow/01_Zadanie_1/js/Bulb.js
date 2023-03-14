import React, {useState} from 'react';

const Bulb = () => {
    const [color, setColor] = useState("white")

    const handleTurnOn = () => {
       setColor((prevState) =>{
           if(prevState === "white") {
               return "yellow"
           } else {
               return "white"
           }
       })
    }
    return (
        <>
            <button onClick={handleTurnOn}>{color === "white" ? "On" : "Off"}</button>
            <div style={{
                backgroundColor: color,
                width: "100px",
                height: "100px",
                border: "1px solid black"
            }}></div>
        </>
    );
};

export default Bulb;