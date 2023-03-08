import React from 'react';

const ShowUserFunc = ({name, surname}) => {
    const clickHandler = () => {
        console.log(name, surname)
    }
    return (
        <div>
            <button onClick={clickHandler}>Pokaż dane</button>
        </div>
    );
};

export default ShowUserFunc;