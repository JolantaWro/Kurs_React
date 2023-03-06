import React from 'react';

const ReceiptItem = (props) => {
    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.price}</td>
            <td>{props.qty}</td>
            <td>{props.results}</td>
        </tr>
    );
};

export default ReceiptItem;

