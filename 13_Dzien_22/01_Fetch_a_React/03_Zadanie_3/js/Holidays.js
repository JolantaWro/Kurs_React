import React, {useEffect, useState} from 'react';

const Holidays = () => {
    const [countryCode, setCountryCode] = useState("PL")
    const [holidaysArray, setHolidayArray] = useState([])
    const address = 'https://fer-api.coderslab.pl/v1/holidays'
    const apiKey = 'e92601251-c0a2-4s63-v73f-54041195480f'
    const url = `${address}?key=${apiKey}&country=${countryCode}`

    const getHoliday = async () => {
        const response = await fetch(url);
        const data = await response.json()
        setHolidayArray(data.holidays)
    }

    useEffect(() => {
        getHoliday()
    }, [countryCode])

    return (
        <div>
            <select onChange={event => setCountryCode(event.target.value)}>
                <option value="PL" onChange={(e) => setCountryCode(e.target.value)}>PL</option>
                <option value="GB" onChange={(e) => setCountryCode(e.target.value)}>GB</option>
                <option value="US" onChange={(e) => setCountryCode(e.target.value)}>US</option>
            </select>
            {!holidaysArray ?
                <h1>Pobieram dane</h1>
                :
                holidaysArray.map((element, index) =>
                    <ul className="list">
                        <li key={index}>{element.name} {element.date}</li>)
                    </ul>)
            }
        </div>
    );
};

export default Holidays;
