import React from 'react';

const ShopItemPricing = (props) => {
    return (
        <footer>
            Cena: {props.price} zł
            <button>Kup!</button>
        </footer>
    );
};

export default ShopItemPricing;