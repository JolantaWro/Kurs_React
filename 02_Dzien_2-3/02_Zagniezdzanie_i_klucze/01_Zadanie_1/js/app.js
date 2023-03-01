import React, {Fragment} from "react";
import { createRoot } from "react-dom/client";
import people from "./data/people";

// const printPeople = people.map(element => <div>{element.name} {element.surname}</div> )

const listPeople = people.map((element, index) => <li key={index}>{element.name} {element.surname}</li>);

const container = document.getElementById("app");
const root = createRoot(container);
// root.render(
//     <>
//         {printPeople}
//     </>);

root.render(
    <div>
        <ul>
            {listPeople}
        </ul>
    </div>)