import React, {useState} from 'react';
import AdultStuffBox from "./AdultStuffBox";

const AdultStuff = () => {
    const [age, setAge] = useState(10)


    return (
        <form>
            <input type="number" value={age} onChange={(e) => setAge(parseInt(e.target.value))}/>
            <AdultStuffBox age={age}/>
        </form>
    );
};

export default AdultStuff;