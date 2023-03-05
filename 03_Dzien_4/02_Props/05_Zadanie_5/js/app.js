import React, { Component } from "react";
import { createRoot } from "react-dom/client";
import Menu from "../../../01_Podstawy/03_Zadanie_3/js/Menu";

const container = document.getElementById("app");
const root = createRoot(container);
root.render(
    <>
        <Menu menu={[
            {
                url: "/",
                text: "Strona główna"
            },
            {
                url: "/blog",
                text: "Blog"
            },
            {
                url: "/cennik",
                text: "Cennik"
            },
            {
                url: "/kontakt",
                text: "Kontakt"
            }
        ]} />
    </>
);
