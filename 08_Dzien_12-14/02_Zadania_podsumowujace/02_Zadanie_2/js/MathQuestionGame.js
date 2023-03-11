import React, {useEffect, useState} from 'react';
import Button from "./Button";


//dokoncz *****************************************************
const MathQuestionGame = () => {

    const time = 10000
    const arrayOperations = ["*", "/", "+", "-"]
    const operations = arrayOperations[Math.floor(Math.random()*arrayOperations.length)]

    const firstNumber = Math.floor(Math.random() * (10 - 1) + 1 )
    const secondNumber = Math.floor(Math.random() * (10 - 1) + 1 )
    const result = Math.round(eval(`${firstNumber} ${operations} ${secondNumber}`))
    function shuffle(a) {
        for (let i = a.length; i; i--) {
            let j = Math.floor(Math.random() * i);
            [a[i - 1], a[j]] = [a[j], a[i - 1]];
        }
    }

    const choices = [result];
    const checkNumber = () => {
        while(choices.length < 4) {
            const choice = Math.floor(Math.random() * (100 - 1) + 1 )
            if(!choices.includes(choice)) {
                choices.push(choice);
            }
        }
        return shuffle(choices)
    }

    checkNumber()

    const [arrayAnswer, setArrayAnswer] = useState(choices)
    const [isDisabled, setDisabled] = useState(false)
    const [timeGame, setTimeGame] = useState(time)
    const [firstNum, setFirstNum] = useState(firstNumber)
    const [secondNum, setSecondNum] = useState(secondNumber)
    const [resultNum, setResultNum] = useState(result)
    const [operationMath, setOperationMath] = useState(operations)


    useEffect(() => {
        const timerGames = setInterval(() => {
            setTimeGame((prevState) => {
                if(prevState !== 0) {
                    return prevState - 50
                } else {
                    setDisabled(true)
                    clearInterval(timerGames)
                }
            })
        }, 50)
    }, [])


    return (
        <div>
            <h2></h2>
            <h1>{firstNum} {operationMath} {secondNum} = {resultNum}</h1>
            <div>
                {
                    arrayAnswer.map((element, index) => <button key={index} disabled={isDisabled}>{element}</button>)
                }
            </div>
            <h3>{timeGame}</h3>
        </div>
    );
};

export default MathQuestionGame;