import React from 'react';

const Receipt = (props) => {
    return (
        <table className="table">
            {props.children}
        </table>

    );
};

export default Receipt;