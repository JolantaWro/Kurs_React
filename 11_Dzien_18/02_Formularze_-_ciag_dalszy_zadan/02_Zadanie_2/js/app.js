import React, {Component} from "react";
import ReactDOM from "react-dom";
import {createRoot} from "react-dom/client";
import AdultStuff from "./AdultStuff";

// ReactDOM.render(
//   <h1>Hello, World!</h1>,
//   document.getElementById("app")
// );
const App = () => <AdultStuff />

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);