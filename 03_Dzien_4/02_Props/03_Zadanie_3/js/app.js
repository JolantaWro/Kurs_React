import React, { Component } from "react";
import { createRoot } from "react-dom/client";
import Sum from "./Sum";

const container = document.getElementById("app");
const root = createRoot(container);
root.render(
    <>
        <Sum numbers={[5, 4, 1]} />
    </>
);
