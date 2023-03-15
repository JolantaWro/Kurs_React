import React, {useState} from 'react';

const ToDoList = () => {
    const [myArray, setArray] = useState([{
        id: 1,
        name: "Rzecz do zrobienia",
        done: false
    }])



    return (
        <div className="toDoList">
            <form className="header">
                <h2>Twoja lista zadań</h2>
                <input type="text" placeholder="np. Zrobić zakupy"/>
                <button className="btn-add">Dodaj</button>
            </form>

            <ul>
                <li>Kupić mleko</li>
                <li className="done">Zrobić prezentację</li>
            </ul>
        </div>

    );
};

export default ToDoList;