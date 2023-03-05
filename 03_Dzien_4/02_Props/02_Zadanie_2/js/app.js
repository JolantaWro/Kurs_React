import React, { Component } from "react";
import { createRoot } from "react-dom/client";
import AddNumbers1 from "./AddNumbers1";

const container = document.getElementById("app");
const root = createRoot(container);
root.render(
    <>
        <AddNumbers1 numberA={3} numberB={4} />
    </>
);
