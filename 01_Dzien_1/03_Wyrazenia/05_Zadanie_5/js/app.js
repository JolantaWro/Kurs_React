// import React from "react";
// import { createRoot } from "react-dom/client";
//
// const container = document.getElementById("app");
// const root = createRoot(container);
// root.render(<h1>Hello, World!</h1>);

import React from "react";
import { createRoot } from "react-dom/client";

const firstNumber = prompt("Podaj pierwszą liczbe")
const secondNumber = prompt("Podaj drugą liczbę")
const singValue = prompt("Wprowadz znak działania")

const container = document.getElementById("app");
const root = createRoot(container);
if (singValue === "+") {
    root.render(<h1>{parseFloat(firstNumber) + parseFloat(secondNumber)}</h1>);
} else if (singValue === "-") {
    root.render(<h2>{parseFloat(firstNumber) - parseFloat(secondNumber)}</h2>);
} else if (singValue === "*") {
    root.render(<h3>{parseFloat(firstNumber) * parseFloat(secondNumber)}</h3>);
} else if (singValue === "/") {
    root.render(<h4>{parseFloat(firstNumber) / parseFloat(secondNumber)}</h4>);
}
