import React, {useEffect, useState} from 'react';
import ClockTime from "./ClockTime";
import ClockDate from "./ClockDate";

const Clock = () => {
    const date = new Date()
    const [myDate, setMyDate] = useState(date)

    useEffect(() => {
        const intervalDate = setInterval(() => {
            setMyDate((prevState) => new Date())
        }, 1000)
    }, [])
    return (
        <div>
            <ClockTime myDate={myDate} />
            <ClockDate myDate={myDate} />
        </div>
    );
};

export default Clock;