import React from "react";
import { createRoot } from "react-dom/client";

const prompt1 = prompt("Podaj rok urodzenia")

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<h1>{new Date().getFullYear() - parseFloat(prompt1)}</h1>);
