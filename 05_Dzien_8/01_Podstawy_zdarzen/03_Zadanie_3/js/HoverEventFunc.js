import React from 'react';

const HoverEventFunc = () => {
    const onElement = () => {
        console.log("Najechano na przycisk!")
    }
    return (
        <div>
            <button onMouseEnter={onElement}>Przycisk 1</button>
        </div>
    );
};

export default HoverEventFunc;