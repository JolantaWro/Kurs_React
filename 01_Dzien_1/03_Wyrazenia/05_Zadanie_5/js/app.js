import React from "react";
import { createRoot } from "react-dom/client";
import person from "../../03_Zadanie_3/js/data/person";
const firstNumber = prompt("Podaj pierwszą liczbe")
const secondNumber = prompt("Podaj drugą liczbę")
const singValue = prompt("Wprowadz znak działania")


function calc(a, b, operation) {
    if (operation === "+") {
        return <h1>{parseFloat(a) + parseFloat(b)}</h1>;
    } else if (operation === "-") {
       return <h2>{parseFloat(a) - parseFloat(b)}</h2>;
    } else if (operation === "*") {
        return <h3>{parseFloat(a) * parseFloat(b)}</h3>;
    } else if (operation === "/") {
        return <h4>{parseFloat(a) / parseFloat(b)}</h4>;
    }
}
const container = document.getElementById("app");
const root = createRoot(container);
root.render(<div>{calc(firstNumber, secondNumber, singValue)}</div>);
// calc(firstNumber, secondNumber, singValue)