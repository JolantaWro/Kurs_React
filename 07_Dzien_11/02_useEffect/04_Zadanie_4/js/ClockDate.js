import React from 'react';

const ClockDate = ({myDate}) => {
    return (
        <h1>{myDate.toLocaleDateString()}</h1>
    );
};

export default ClockDate;