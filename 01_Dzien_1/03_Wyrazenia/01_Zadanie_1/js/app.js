import React from "react";
import { createRoot } from "react-dom/client";

const prompt1 = prompt("Podaj liczbe A")
const prompt2 = prompt("Podaj liczbe B")

const container = document.getElementById("app");
const root = createRoot(container);

root.render(<div>{parseFloat(prompt1) + parseFloat(prompt2)}</div>);
