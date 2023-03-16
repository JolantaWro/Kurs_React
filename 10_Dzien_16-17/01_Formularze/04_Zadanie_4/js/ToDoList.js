import React, {useState} from 'react';

const ToDoList = () => {
    const [newTask, setNewTask] = useState("")
    const [myArray, setArray] = useState([])
    const [classMy, setClass] = useState("done")

    const handleAddTask = (e) => {
        setArray((prev) => [...prev, {
            id: prev.length,
            name: newTask,
            done: false
        }])
        setNewTask("")
        e.preventDefault()
    }

    const handleDoneTask = (e) => {
        console.log("Kliknieto", e)
        console.log(myArray[e])
        setArray(myArray.map((task) => task.id === e ? {...task, done: true} : {...task}))
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
                <li className="done">Zrobić prezentację</li>

            </ul>
        </div>

    );
};

// const changeColor = () => {
//     updateMyArray([...colorArray, {
//         id: colorArray.length,
//         value: randomColor
//     }])
// }
// const handleAddTask = (e) => {
//     setArray([...myArray, {
//         id: myArray.length,
//         name: e.target.value,
//         done: false
//     }])
// }

export default ToDoList;

