import React, {useEffect, useState} from 'react';

const Stopwatch = () => {

    const [time, setTime] = useState(0)
    const [laps, setLaps] = useState([])
    const [isRunning, setRunning] = useState(false)

    const handleLap = () => setLaps((prev) => [...prev, time])

    useEffect(() => {
        let intervalRunning;
        if(isRunning) {
            intervalRunning = setInterval(() => {
                setTime((prev) => prev + 10)
            }, 10)
        }
        return () => clearInterval(intervalRunning)

    }, [isRunning])

    return (
        <div>
            <h1>Time: {time} s</h1>
            <button onClick={handleLap}>Lap</button>
            <button onClick={() => setRunning(false)}>Stop</button>
            <button onClick={() => {
                setTime(0)
                setLaps([])
            }}>Restart</button>
            <button onClick={() => setRunning(true)}>Start</button>
            <ul>
                {
                    laps.map((element, index) => <li key={index}>{element}</li>)
                }
            </ul>

        </div>
    );
};

export default Stopwatch;