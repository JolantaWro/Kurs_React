import React, {useState} from 'react';

const Numbers = () => {
    const firstArray = [54,76,24,63,4,54,82,36,13,80,10,69,4,23,40]
    const [myArray, setArray] = useState(firstArray)

    const viewNumbersEven = () => {
        setArray((prevState) => prevState.filter(x => x % 2 === 0))
    }

    const viewNumbersOdd = () => {
        setArray((prevState) => prevState.filter(x => x % 2 === 1))
    }
    const viewNumbersAll = () => {
        setArray((prevState) => firstArray)
    }
    return (
        <div>
            <ul>
                {
                    myArray.map((element, index) => <li key={index}>{element}</li> )
                }
            </ul>
            <button onClick={viewNumbersEven}>Pokaż tylko parzyste</button>
            <button onClick={viewNumbersOdd}>Pokaż nieparzyste</button>
            <button onClick={viewNumbersAll}>Pokaż wszystkie</button>
        </div>
    );
};

export default Numbers;

// const filteredArray = foo.filter(function(element, index, array) {
//     return element % 2 === 0;
// });
