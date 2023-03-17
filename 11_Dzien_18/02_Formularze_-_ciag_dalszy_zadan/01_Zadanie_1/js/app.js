import React, {Component} from "react";
import PESELInput from "./PeselInput";

import {createRoot} from "react-dom/client";
import PeselInput from "./PeselInput";

const App = () => <PeselInput />

// ReactDOM.render(
//   <> <App /></>,
//   document.getElementById("app")
// );
const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);