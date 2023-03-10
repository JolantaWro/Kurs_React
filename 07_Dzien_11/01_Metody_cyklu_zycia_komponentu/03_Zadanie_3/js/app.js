import React from "react";
import { createRoot } from "react-dom/client";
import HelloWorld from "../../02_Zadanie_2/js/HelloWorld";
import Box from "./Box";

const App = () => {
    return (
        <>
            <Box />
        </>
    )
}
const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
