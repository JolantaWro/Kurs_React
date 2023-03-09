import React from "react";
import { createRoot } from "react-dom/client";
import AccountData from "./AccountData";

const App = () => <AccountData />

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
