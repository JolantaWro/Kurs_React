import React, { Component } from "react";
import { createRoot } from "react-dom/client";
import Hello1 from "./Hello1";

const container = document.getElementById("app");
const root = createRoot(container);
root.render(
    <>
        <Hello1 name="Jolanta" surname="Woronowska" />
    </>
);
