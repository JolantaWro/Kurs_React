import React from "react";
import { createRoot } from "react-dom/client";
import PokeApi from "./PokeApi";

const App = () => <PokeApi />

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<><App /></>);