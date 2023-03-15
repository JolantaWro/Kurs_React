import React,{useState} from 'react';

const SelectOrType = ({items}) => {
    const [baseCar, setBaseCar]= useState(items)
    const [valueUser, setValueUser] = useState(items[0])
    const [isVisible, setVisible] = useState(true)

    const handleTitleChange = (e) => {
        if (e.target.value === "other") {
            setVisible(false)
        }
        setValueUser(e.target.value);
    };
    const handleAddList = (e) => {
        setBaseCar((prev) => [...prev, valueUser])
        setVisible(true)
        e.preventDefault()
    }


    return (
        <>
            <form>
                <select value={valueUser} onChange={handleTitleChange}>
                    {
                        baseCar.map((element, index) => <option key={index} value={element}>{element}</option>)
                    }
                    <option value="other">Inne</option>
                </select>
                <input type="text" value={valueUser} onChange={handleTitleChange} hidden={isVisible}/>
                <button onClick={(e) => handleAddList(e)} hidden={isVisible}> Zapisz nową wartość</button>
            </form>
        </>
    );
};

export default SelectOrType;