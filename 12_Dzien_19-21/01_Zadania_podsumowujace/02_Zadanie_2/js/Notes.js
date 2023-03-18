import React, {useState} from 'react';

const Notes = () => {
    const [text, setText] = useState("")
    return (
        <>
            <form>
                <textarea value={text} onChange={(e) => setText(e.target.value)} rows={4} cols={40}></textarea>
                <span style={{display: "block"}}>{text}</span>
                <button onChange={(e) => e.preventDefault()}>Zapisz</button>
            </form>
        </>
    );
};

export default Notes;