import React from 'react';
import useInput from "./hooks/useInput";

const InteractiveDiv = () => {
    const [value, inputValue] = useInput(10)

    return (
        <div>
            <input type="number" {...inputValue}/>
            <div style={{
                height: "100px",
                width: `${value}px`,
                backgroundColor: "red"
            }}></div>
            
        </div>
    );
};

export default InteractiveDiv;