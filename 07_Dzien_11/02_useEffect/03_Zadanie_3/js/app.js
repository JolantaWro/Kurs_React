import React from "react";
import { createRoot } from "react-dom/client";
import UserInfo from "./UserInfo";

const App = () => <UserInfo />
const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
