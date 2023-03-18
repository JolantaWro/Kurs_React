import React, { Component } from "react";
import { createRoot } from "react-dom/client";
import WhoIsPresent from "./WhoIsPresent";

const App = () => <WhoIsPresent />

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<><App /></>);
