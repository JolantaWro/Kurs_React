import React from "react";
import { createRoot } from "react-dom/client";
import MagicBox from "./MagicBox";

const App = () => <MagicBox />

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
