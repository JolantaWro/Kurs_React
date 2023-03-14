import React from 'react';

const ButtonToClick = ({setCounter}) => {
    const handleCheckFunction = (valueUpdate) => {
        if (typeof valueUpdate === "function") {
            valueUpdate(prev => prev + 1)
        }
    }

    return (
        <>
            <button onClick={()=> handleCheckFunction(setCounter)}>click</button>
            <button onClick={()=> handleCheckFunction(setCounter)}>click</button>
        </>

    );
};

export default ButtonToClick;