import React from 'react';

const ShopItemHeader = (props) => {
    return (
        <header>
            <h1>{props.title}</h1>
            <img src={props.image}/>
        </header>
    );
};

export default ShopItemHeader;