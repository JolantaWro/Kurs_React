import React from "react";
import { createRoot } from "react-dom/client";
import BookInfo from "./BookInfo";

const App = () => <BookInfo isbn="0747532699" />

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<><App /></>);
