import React from 'react';


const ReceiptFooter = ({items}) => {
    const results = items.reduce((el, item) => el + (item.single_price * item.qty),0);
    return (
        <tr>
            <td>RAZEM</td>
            <td>-</td>
            <td>-</td>
            <td>{results.toFixed(2)}</td>
        </tr>
    )
};


export default ReceiptFooter;