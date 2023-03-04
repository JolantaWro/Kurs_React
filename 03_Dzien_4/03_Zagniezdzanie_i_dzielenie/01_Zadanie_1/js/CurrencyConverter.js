import React from 'react';

const CurrencyConverter = ({from, to, value, rate}) => {
    return (
        <div>
            <strong>{value}</strong> {from} => <strong>{value*rate}</strong> {to}
        </div>
    );
};

export default CurrencyConverter;