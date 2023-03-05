import React from 'react';

const ChildComponent = (props) => {
    return (
        <div className="children">
            {props.children}
        </div>
    );
};

export default ChildComponent;