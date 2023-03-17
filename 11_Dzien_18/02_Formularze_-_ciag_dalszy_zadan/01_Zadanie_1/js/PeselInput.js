import React, {useState} from 'react';
import usePesel from "./hooks/usePesel";

const PeselInput = () => {

    //sposob I
    const [form, setForm] = useState({ valueInput: 0, message: false });
    const [message, setMessage] = useState("")

    const handleValueInput = (e) => {
        const {name, value} = e.target
        setForm((prevState) => {
            return {
                ...prevState,
                [name]: value,
            };
        });

        if(e.target.value.length === 11 || typeof e.target.value === "number") {
            setMessage("Prześlij")
        } else if (e.target.value.length <= 10) {
            setMessage("za mało cyfr")
        } else if (e.target.value.length > 11) {
            setMessage("za dużo cyfr")
        }
    }


    //Sposób II

    const [isValidPesel, setInputPesel] = usePesel(0)

    return (
        <>
            <p>Pierwszy form
                <form onSubmit={(e) => e.preventDefault()}>
                    <input type="number" name="valueInput" value={form.valueInput} onChange={handleValueInput}/>
                    <div>
                        {message ? <input type="submit" value={message} /> : null}
                    </div>

                </form>
            </p>
            <p>Drugi form
                <form onSubmit={(e) => e.preventDefault()}>
                    <input type="number" {...setInputPesel}/>
                    <div>
                        {isValidPesel ? <input type="submit" value="Prześlij" /> : <div>"Niepoprawny pesel"</div>}
                    </div>

                </form>
            </p>
        </>
    );
};

export default PeselInput;