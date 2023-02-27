import React from "react";
import { createRoot } from "react-dom/client";

const redDiv = <div />;
const greenDiv = <div />;
const blueDiv = <div />;

const container = document.getElementById("app");
const root = createRoot(container);
root.render(
  <>
    {redDiv}
    {greenDiv}
    {blueDiv}
  </>
);
