import React, {Fragment} from "react";
import { createRoot } from "react-dom/client";
import person from "./data/person";

const printPerson = <div>
    <h1>{person.title} {person.firstName} {person.lastName}</h1>
    <span>{person.age}</span>
</div>


const container = document.getElementById("app");
const root = createRoot(container);
root.render(
    <>
        {printPerson}
    </>
);
