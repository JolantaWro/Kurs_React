import React from "react";
import { createRoot } from "react-dom/client";
import Buttons from "./Buttons";


const App = () => <Buttons />

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);