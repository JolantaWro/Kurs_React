import React from "react";
import { createRoot } from "react-dom/client";

const styleRed = {
  height: "100px",
  backgroundColor: "red"
}

const styleGreen = {
  height: "100px",
  backgroundColor: "green"
}

const styleBlue = {
  height: "100px",
  backgroundColor: "blue"
}

// const redDiv = <div style={styleRed}/>;
// const greenDiv = <div style={styleGreen}/>;
// const blueDiv = <div style={styleBlue}/>;

const redDiv = <div style={{height: "100px", backgroundColor: "red"}}/>;
const greenDiv = <div style={{height: "100px", backgroundColor: "green"}}/>;
const blueDiv = <div style={{height: "100px", backgroundColor: "blue"}}/>;

const container = document.getElementById("app");
const root = createRoot(container);
root.render(
    <>
      {redDiv}
      {greenDiv}
      {blueDiv}
    </>
);