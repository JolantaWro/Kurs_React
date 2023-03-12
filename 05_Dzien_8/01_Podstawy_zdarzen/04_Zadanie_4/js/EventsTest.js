import React from 'react';

const EventsTest = () => {
    const divStyle = {
        backgroundColor: "red",
        height: "100px",
        weight: "100px"
    }

    const handleEventsClick = () => console.log("Kliknięto Div")
    const handleEventsEnter = () => console.log("Najechano na Div")
    const handleEventsLeave = () => console.log("Zjechanie z Div")


    return (
        <div style={divStyle} onClick={handleEventsClick} onMouseEnter={handleEventsEnter} onMouseLeave={handleEventsLeave}></div>
    );
};

export default EventsTest;