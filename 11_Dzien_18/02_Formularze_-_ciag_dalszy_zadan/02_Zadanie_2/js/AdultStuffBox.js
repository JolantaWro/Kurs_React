import React from 'react';

const AdultStuffBox = ({age}) => {
    return (
        <div>
            {age >= 18 ? <p>Lorem ipsum, treść dla pełnoletnich</p> : <p>Treść dla osób poniżej 18r. życia</p>}
        </div>
    );
};

export default AdultStuffBox;