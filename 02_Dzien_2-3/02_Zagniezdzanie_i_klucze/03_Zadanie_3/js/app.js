import React, {Fragment} from "react";
import { createRoot } from "react-dom/client";
import people from "./data/people";


const printPeople = people.map((element, index) =>
    <div key={element.id} className="person">
        <img src={element.avatar} />
        <div className="info">
            <h1>{element.title} {element.name} {element.surname}</h1>
            <p>{element.bio}</p>
        </div>
    </div>
)

const container = document.getElementById("app");
const root = createRoot(container);
root.render(
    <>
        {printPeople}
    </>)
