import React from "react";
import { createRoot } from "react-dom/client";
import NumberInfo from "./NumberInfo";

const App = () => <NumberInfo number={11} />

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
