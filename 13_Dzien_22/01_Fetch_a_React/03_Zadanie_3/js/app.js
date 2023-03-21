import React from "react";
import { createRoot } from "react-dom/client";
import Holidays from "./Holidays";

const App = () => <Holidays />

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<><App /></>);