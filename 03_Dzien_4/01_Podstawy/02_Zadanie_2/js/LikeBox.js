// import React from 'react';

// const LikeBox = () => {
//     return (
//         <div>
//             <h3>100 likes</h3>
//             <button>Lubię to</button>
//         </div>
//     );
// };
//
// export default LikeBox;

import React from 'react';

const LikeBox = (props) => {
    return (
        <div>
            <h3>{props.likes}</h3>
            <button>Lubię to</button>
        </div>
    );
};

export default LikeBox;