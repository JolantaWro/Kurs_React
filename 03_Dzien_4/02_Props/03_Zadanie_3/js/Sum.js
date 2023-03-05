import React from 'react';

const Sum = function (props) {
    const result = props.numbers.reduce((total, item) =>
        total + item
    )
    return (
        <h1>{result}</h1>
    );
};

export default Sum;