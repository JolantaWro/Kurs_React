import React, { Component } from "react";
import { createRoot } from "react-dom/client";
import CurrencyConverter from "./CurrencyConverter";

const App = () => {
    return (
        <>
            <CurrencyConverter from="Euro" to="USD" value={100} rate={1.07} />
        </>
    )
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
