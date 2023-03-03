import React, { Component } from "react";
import { createRoot } from "react-dom/client";
import Menu from "./Menu";

const container = document.getElementById("app");
const root = createRoot(container);
root.render(
    <>
        <Menu />
    </>
);
