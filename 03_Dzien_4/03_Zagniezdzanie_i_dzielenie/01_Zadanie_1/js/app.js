import React, { Component } from "react";
import { createRoot } from "react-dom/client";
import CurrencyConverter from "./CurrencyConverter";

const App = () => {
    return (
        <>
            <CurrencyConverter from="EUR" to="USD" value={100} rate={1.07} />
            <CurrencyConverter from="USD" to="EUR" value={100} rate={0.94} />
            <CurrencyConverter from="EUR" to="PLN" value={100} rate={4.67} />
        </>
    )
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
