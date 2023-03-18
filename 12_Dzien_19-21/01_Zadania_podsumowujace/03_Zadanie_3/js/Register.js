import React, {useState} from 'react';

const Register = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        passwordRepeat: "",
        address: "",
        post: "",
        city: ""
    })
    const [genreUser, setGenre] = useState("")
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState(null);


    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm((prevState) => {
            return {
                ...prevState,
                [name]: value
            }
        })}

    const validate = () => {
        const errorsArray = [];
        if (!form.name || form.name.length < 5) {
            errorsArray.push("Imię i nazwisko musi zawierać min. 5 znaków")}
        if (form.email.length < 3 || !form.email.includes("@")) {
            errorsArray.push("Mail powinien zawierać @ oraz min. 3 znaki")}
        if(form.password.length < 4) {
            errorsArray.push("Wprpwadz min. 4 znaki hasła")}
        if (form.password !== form.passwordRepeat) {
            errorsArray.push("Wprowadzone hasła różnią się")}
        if (form.address.length < 3) {
            errorsArray.push("Adres musi składać się z min. 3 znaków")}
        if( form.post.length < 5 || isNaN(form.post)) {
            errorsArray.push("Kod pocztowy musi zawierać 5 znaków (bez myślnika, same cyfry)")}
        if (form.city.length < 2) {
            errorsArray.push("Nazwa miasta musi zawierać min. 2 znaki")}
        if(errorsArray.length !==0) {
            setError(() => errorsArray)
            setIsSubmitted(false)
            return false
        } else {
            setError(null)
            setIsSubmitted(true)
            return true
        }
    }

    const handleSendForm = (e) => {
        e.preventDefault();
        validate()
    }

    return (
        <>
            <form onSubmit={handleSendForm}>
                <h2>Dane osobowe </h2>
                <label htmlFor="name">Imię i nazwisko:</label>
                    <input type="text" name="name" value={form.name} onChange={handleChange} required/>
                <label htmlFor="email">Mail:</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange}/>
                <label htmlFor="password">Hasło:</label>
                    <input type="password" name="password" value={form.password} onChange={handleChange}/>
                <label htmlFor="passwordRepeat">Powtórz hasło:</label>
                    <input type="password" name="passwordRepeat" value={form.passwordRepeat} onChange={handleChange}/>
                <label>Płeć</label>
                    <select value={genreUser} onChange={(e) => setGenre(e.target.value)}>
                        <option value="Kobieta" onChange={(e) => setGenre(e.target.value)}>Kobieta</option>
                        <option value="Mężczyzna" onChange={(e) => setGenre(e.target.value)}>Mężczyzna</option>
                    </select>

                <h2>Dane do wysyłki </h2>
                <label htmlFor="address">Adres:</label>
                    <input type="text" name="address" value={form.address} onChange={handleChange}/>
                <label htmlFor="post">Kod pocztowy:</label>
                    <input type="text" name="post" value={form.post} onChange={handleChange}/>
                <label htmlFor="city">City:</label>
                    <input type="text" name="city" value={form.city} onChange={handleChange}/>


                <input type="submit" value="Prześlij"/>
            </form>

            <div>
                {error ? <ul>{error.map((err, i) => <li key={i}>{err}</li>)}</ul> : null}
                {isSubmitted ? <><h3>Podsumowanie</h3><h5>Imie i nazwisko: {form.name}</h5>
                    <h5>Mail: {form.email}</h5>
                    <h5>Płeć: {genreUser}</h5>
                    <h5>Adres: ul.{form.address}</h5>
                    <h5>kod pocztowy {form.post}</h5>
                    <h5>Miasto: {form.city}</h5></> : null}
            </div>
        </>
    );
}

export default Register;