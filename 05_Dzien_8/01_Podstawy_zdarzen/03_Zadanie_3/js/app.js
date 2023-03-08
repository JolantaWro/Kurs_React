import React from "react";
import { createRoot } from "react-dom/client";
import HoverEventFunc from "./HoverEventFunc";
import HoverEventClass from "./HoverEventClass";

const App = () => {
    return(
        <>
            <HoverEventFunc />
            <HoverEventClass />
        </>
    )
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
