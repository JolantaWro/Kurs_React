import React from "react";
import { createRoot } from "react-dom/client";

function genNumber() {
  return Math.round(Math.random() * 9 + 1);
}

const a = genNumber()
const b = genNumber()
const sumRoundNumbers = parseFloat(a) + parseFloat(b)
console.log(a, b)
const sumNumbers = prompt(`Wylosowane liczby to ${a} i ${b}, podaj sume tych liczb`)

const container = document.getElementById("app");
const root = createRoot(container);
if (sumRoundNumbers === parseFloat(sumNumbers)){
  root.render(<div style={{backgroundColor: "green"}}>{'Odpowiedź poprawna'}</div>);
} else {
  root.render(<div style={{backgroundColor: "red"}}>{'Odpowiedź błędna'}</div>);
}


