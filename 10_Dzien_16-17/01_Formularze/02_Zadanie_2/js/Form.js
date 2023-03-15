import React, {useState} from 'react';
import FakeAPI from "./data/fakeAPI";

const Form = () => {
    const [form, setForm] = useState({ login: "", password: "" });
    const [message, setMessage] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleLogin = (e) => {
        const { name, value } = e.target;
        setForm((prevState) => {
            return {
                ...prevState,
                [name]: value,
            };
        });

        if(e.target.value.length < 2) {
            setMessage("Wprowadzono mniej niż 2 znaki")
        } else if (e.target.value.length < 4) {
            setMessage("Wprowadzono mniej niż 4 znaki")
        } else if (e.target.value.length > 4) {
            setMessage("")
        }

    };

    if(form.login && form.password) {
        FakeAPI.login({
            username: form.login,
            password: form.password
        }).then(user => {
            console.log("zalogowany", user)
            setMessage(`Witaj ${user.name} ${user.surname}`)
        }).catch(err => {
            setMessage("Nie odnaleziono użytkownika")
        })
    }


    return (
        <form onSubmit={handleSubmit}>
            <label>Login
                <input type="text" name="login" value={form.login} onChange={handleLogin}/>
            </label>
            <label>Hasło
                <input type="text" name="password" value={form.password} onChange={handleLogin}/>
            </label>
            <input type="submit" value="Zaloguj!" />

            <h1>{message}</h1>
        </form>
    );
};

export default Form;