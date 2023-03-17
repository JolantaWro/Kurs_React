import React, {useState} from 'react';

const ToDoList = () => {
    const [newTask, setNewTask] = useState("")
    const [myArray, setArray] = useState([])

    const handleAddTask = (e) => {
        setArray((prev) => [...prev, {
            id: prev.length,
            name: newTask,
            done: false
        }].sort((a,b) => Number(a.done) - Number(b.done)))
        setNewTask("")
        e.preventDefault()
    }

    const handleDoneTask = (e) => {
        setArray(myArray.map((task) => task.id === e ? {...task, done: true} : {...task}).sort((a,b) => Number(a.done) - Number(b.done)))
    }

    return (
        <div className="toDoList">
            <form className="header">
                <h2>Twoja lista zadań</h2>
                <input type="text" placeholder="np. Zrobić zakupy" value={newTask} onChange={(e)=>setNewTask(e.target.value)}/>
                <button className="btn-add" onClick={handleAddTask}>Dodaj</button>
            </form>

            <ul>

                {
                    myArray.map((element, index)=>
                        element.done === false ? <li key={element.id} onClick={(e) => handleDoneTask(element.id)}>{element.name}</li> :
                            <li key={element.id} onClick={(e) => handleDoneTask(element.id)} className="done">{element.name}</li>

                    )
                }

            </ul>
        </div>

    );
};

export default ToDoList;