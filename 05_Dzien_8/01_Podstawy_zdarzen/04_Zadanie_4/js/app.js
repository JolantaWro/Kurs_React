import React from "react";
import { createRoot } from "react-dom/client";
import EventsTest from "./EventsTest";

const App = () => {
    return(
        <EventsTest />
    )
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
