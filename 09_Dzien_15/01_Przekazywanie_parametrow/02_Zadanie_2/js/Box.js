import React, {useState} from 'react';

const Box = () => {

    const [color, setColor] = useState("green")
    const [width, setWidth] = useState("500px")
    const [height, setHeight] = useState("200px")

    const handleChange = (valueColor, valueWidth, valueHeight) => {
        setColor(valueColor)
        setWidth(valueWidth)
        setHeight(valueHeight)
    };
    return (
        <>
            <button onClick={()=> handleChange("orange", "200px", "300px")}>1</button>
            <button onClick={()=> handleChange("blue", "100px", "700px")}>2</button>
            <button onClick={()=> handleChange("green", "500px", "200px")}>3</button>
            <div style={{
                backgroundColor: color,
                width: width,
                height: height
            }}>
            </div>
        </>

    );
};

export default Box;