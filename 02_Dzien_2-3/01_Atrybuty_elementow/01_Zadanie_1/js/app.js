import React from "react";
import { createRoot } from "react-dom/client";


const imageUrl = "https://fer-api.coderslab.pl/assets/pexels-photo-4974914.jpeg";


const container = document.getElementById("app");
const root = createRoot(container);
root.render(<img src={imageUrl}></img>);
