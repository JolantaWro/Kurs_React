import React from 'react';

const ReceiptHeader = (props) => {
    return (
            <tr>
                <td>Nazwa</td>
                <td>Cena</td>
                <td>Ilość</td>
                <td>Łączna cena</td>
            </tr>
    );
};

export default ReceiptHeader;