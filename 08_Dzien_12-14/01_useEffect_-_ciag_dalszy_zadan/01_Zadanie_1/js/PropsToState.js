import React, {useEffect, useState} from 'react';
import ShowInfo from "./ShowInfo";

const PropsToState = ({info}) => {
    const [text, setText] = useState(info)

    useEffect(() => {
        const intervalText = setInterval(() => {
            setText((prevState) => prevState + ".")
        }, 2000)
    }, [])

    return (
        <div>
            <ShowInfo info={text}/>
        </div>
    );
};

export default PropsToState;