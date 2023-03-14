import React from 'react';

const ShopItem = ({title, setList}) => {

    const handleBuy = (valueUpdate) => {
        if (typeof valueUpdate === "function") {
            valueUpdate((prev) => [...prev, title])
        }
    }


    return (
        <div>
            <h1>{title}</h1>
            <button onClick={()=>handleBuy(setList)}>Kup</button>
            
        </div>
    );
};

export default ShopItem;