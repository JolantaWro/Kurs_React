import React from "react";
import { createRoot } from "react-dom/client";
import animals from "./data/animals";

const container = document.getElementById("app");
const root = createRoot(container);


root.render(<section>{animals.length} {animals.join(" ")}</section>);
