import React from 'react';
import ReceiptItem from "./ReceiptItem";


const ReceiptItems = ({items}) => {
    return(
        items.map((element, index) => <ReceiptItem key={index} name={element.name}
                                              price={element.single_price}
                                              qty={element.qty} results={element.single_price * element.qty}/> )
    )
};

export default ReceiptItems;