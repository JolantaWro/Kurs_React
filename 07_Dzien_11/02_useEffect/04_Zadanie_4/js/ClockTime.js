import React from 'react';

const ClockTime = ({myDate}) => {
    return (
        <h1>{myDate.toLocaleTimeString()}</h1>
    );
};

export default ClockTime;