import React, {useEffect, useState} from 'react';

const WhoIsPresent = () => {
    const arrayPerson = ['','Anna Kowalska', 'Jan Kowalski', 'Maciej von Handerburg', 'Jurand ze Spychowa'];
    const [personToSelect, setPersonSelect] = useState(arrayPerson);
    const [presentPerson, setPresentPerson] = useState([]);



    const handleSelectPresent = (e) => {

        setPersonSelect((prevState) => {
            return (prevState.filter((element) => element !== e.target.value
            ))
        })
        setPresentPerson((prev) => [...prev, e.target.value]);
    }

    return (
        <form>
            <select value={personToSelect[0]} onChange={handleSelectPresent}>
                {
                    personToSelect.map((select, index) => <option key={index} value={select} onChange={handleSelectPresent}>{select}</option>)
                }
            </select>
            <ul>
                {presentPerson.map((person, index) => <li key={index}>{person}</li>)}
            </ul>
        </form>
    );
};

export default WhoIsPresent;

// document.addEventListener("DOMContentLoaded", function () {
//     function moveElement(a) {
//         if (a.currentTarget.parentElement == document.querySelector("#list1")) {
//             document.querySelector("#list2").appendChild(a.currentTarget);
//         } else {
//             document.querySelector("#list1").appendChild(a.currentTarget);
//         };
//     };
//     const as = document.querySelectorAll("a");
//     as.forEach(a => a.addEventListener("click", moveElement));
// });