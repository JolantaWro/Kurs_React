import React, { Component } from "react";
import { createRoot } from "react-dom/client";
import AddNumbers1 from "./AddNumbers1";
import AddNumbers2 from "./AddNumbers2";

const container = document.getElementById("app");
const root = createRoot(container);
root.render(
    <>
        <AddNumbers1 numberA={3} numberB={4} />
        <AddNumbers2 numberA={3} numberB={4} />
    </>
);
