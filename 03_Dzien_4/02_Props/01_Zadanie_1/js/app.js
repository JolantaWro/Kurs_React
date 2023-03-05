import React, { Component } from "react";
import { createRoot } from "react-dom/client";
import Hello1 from "./Hello1";
import Hello2 from "./Hello2";

const container = document.getElementById("app");
const root = createRoot(container);
root.render(
    <>
        <Hello1 name="Jolanta" surname="Woronowska" />
        <Hello2 name="Jolanta" surname="Woronowska" />
    </>
);
