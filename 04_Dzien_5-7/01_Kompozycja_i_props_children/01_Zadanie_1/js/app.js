import React, { Component } from "react";
import { createRoot } from "react-dom/client";
import ParentComponent from "./ParentComponent";
import ChildComponent from "./ChildComponent";
import GrandchildComponent from "./GrandchildComponent";


const App = () => {
    return (
        <>
            <ParentComponent>
                <ChildComponent>
                    <GrandchildComponent></GrandchildComponent>
                </ChildComponent>
            </ParentComponent>
        </>
    )
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
