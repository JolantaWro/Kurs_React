import React from "react";
import { createRoot } from "react-dom/client";

const colorUser = prompt("Podaj preferowany kolor ramki")
const colorArray = ["red", "green", "blue"]

const container = document.getElementById("app");
const root = createRoot(container);

if (colorArray.includes(colorUser)) {
    const style = {
        width: "100px",
        height: "100px",
        border: "5px",
        borderStyle: "solid",
        borderColor: colorUser
    }
    root.render(<div style={style}></div>);
} else {
    root.render(<div>Nieprawidłowy kolor</div>);
}



