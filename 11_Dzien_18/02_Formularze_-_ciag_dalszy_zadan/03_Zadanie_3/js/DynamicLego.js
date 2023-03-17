import React, {useState} from 'react';

const DynamicLego = () => {
    const [numberBox, setnumberBox] = useState(0)

    return (
        <form>
            <input type="number" value={numberBox} onChange={(e) => setnumberBox(parseInt(e.target.value))} />
            <h3>{numberBox}</h3>
            <ul>
                {Array(numberBox).fill().map((element, index) => <li key={index} style={{backgroundColor: "red", height: "50px", width: `${(index+1)*50}px`}}></li>)}
            </ul>
        </form>
    );
};

export default DynamicLego;