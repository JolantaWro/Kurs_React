import React from 'react';

const ParentComponent = (props) => {
    return (
        <div className="parent">

            {props.children}
        </div>
    );
};

export default ParentComponent;