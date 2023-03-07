import React, {useState} from 'react';

const ToDoList = () => {
    const [doArray, setArray] = useState([])
    const viewTask = () => {
        setArray([...doArray, {
            id: doArray.length,
            value: `Zadanie nr ${doArray.length +1}`

        }])
    }

    return (
        <div>
            <button onClick={viewTask}>Dodaj zadanie</button>
            <ul>
                {
                    doArray.map((element, index) => <li key={index}>{element.value}</li>)
                }

            </ul>
        </div>
    );
};

export default ToDoList;