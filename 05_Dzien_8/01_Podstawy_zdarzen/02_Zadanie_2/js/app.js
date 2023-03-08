import React from "react";
import { createRoot } from "react-dom/client";
import ShowUserFunc from "./ShowUserFunc";
import ShowUserClass from "./ShowUserClass";


const App = () => {
    return(
        <>
            <ShowUserFunc name="Jolanta" surname="Woronowska" />
            <ShowUserClass name="Jolanta" surname="Woronowska" />
        </>
    )
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);