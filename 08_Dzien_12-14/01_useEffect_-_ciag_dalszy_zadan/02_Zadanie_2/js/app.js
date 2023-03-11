import React, { Component } from "react";
import { createRoot } from "react-dom/client";
import SpeedClickGame from "./SpeedClickGame";

const App = () => <SpeedClickGame time={2000}/>

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
