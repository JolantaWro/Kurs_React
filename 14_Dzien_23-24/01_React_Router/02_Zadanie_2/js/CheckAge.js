import React from 'react';
import {useParams} from "react-router-dom";

const CheckAge = () => {
    const {age} = useParams()
    const message = parseInt(age) >= 18 ? 'Pełnoletni' : "Niepełnoletni";

    return (
        <h1>{message}</h1>
    );
};

export default CheckAge;