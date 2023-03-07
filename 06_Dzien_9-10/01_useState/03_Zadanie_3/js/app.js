import React from "react";
import { createRoot } from "react-dom/client";
import CountThings from "./CountThings";

const App = () => <CountThings />

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
