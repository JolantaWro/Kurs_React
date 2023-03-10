import React, {useState, useEffect} from "react";

const CustomTitle = () => {
    const [counter, setCounter] = useState(1);

    useEffect(() => {
        document.title = counter.toString();
    }, [counter]);

    return (
        <p
            onClick={() => setCounter(prev => prev + 1)}
            style={{
                fontSize: `${counter*1.2}rem`
            }}
        >
            Kliknięto mnie już: {counter} razy.
        </p>
    );
};

export default CustomTitle;
