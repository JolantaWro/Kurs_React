import React, {useState} from 'react';

const Hello = () => {

    const [name, setName] = useState("Ty")
    return (
        <form>
            <h1>Hello, {name}</h1>
            <input type="text" value={name} onChange={(event) => setName(event.target.value)}/>
            <input type="submit" value="Wyślij" />
        </form>
    );
};

export default Hello;