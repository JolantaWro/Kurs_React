import React, {useState} from 'react';
import { createElement } from 'react';

const ColorfulBoxes = () => {
    const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    // const randomColor = "#" + Math.random().toString(16).substr(-6)
    const divStyle = {
        backgroundColor: "red",
        height: "200px",
        weight: "200px"
    }
    const [colorArray, updateMyArray] = useState([])
    const changeColor = () => {
        updateMyArray([...colorArray, {
            id: colorArray.length,
            value: randomColor
        }])

    }


    return (

        <div className="newColor">

            <button onClick={changeColor}>Dodaj Boxa!</button>
            <div>
                {
                    colorArray.map((element, index) => <div key={index} style={{backgroundColor:element.value, height:"200px", width: "200px"}}></div>)
                }
            </div>
        </div>
    );
};

export default ColorfulBoxes;