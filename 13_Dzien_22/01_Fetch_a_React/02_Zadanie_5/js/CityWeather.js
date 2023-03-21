//## Zadanie 5 1. W przekierowaniu powinieneś przekazać nazwę miasta.
// 1. Utwórz konto na portalu `https://openweathermap.org/api `.
// 1. W komponencie `CityWeather` na podstawie przekazywanej nazwy miasta utwórz zapytanie do powyższego api,
// które zwróci prognozę pogody. 1. Wyświetl w komponencie nazwę miasta, aktualną temperaturę i ogólny opis pogody.
// 1. Utwórz konto w portalu `https://pixabay.com/api/docs/ `.
// 1. Na podstawie opisu pogody z API pogodowego wyślij zapytanie do portalu pixabay i znajdź obrazek
// ilustrujący opisaną pogodę. 1. Wyświetl go w komponencie. 1. W komponencie `FindWeather` stwórz `TextInput`
// i `Button`. Pozwól użytkownikowi wpisać nazwę miasta i zapisać ją w stanie komponentu.
// 1. Po naciśnięciu guzika wyślij zapytanie do API o pogodę dla danego miasta.
// 1. Jeśli pogoda dla danego miasta zostanie znaleziona wykonaj kroki z punktów 9-12.
// 1. Jeśli pogoda dla danego miasta nie zostanie znaleziona, wyświetl komponent z informacją error 404 brak danych.

//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

import React, {useState, useEffect} from "react";

const CityWeather = () => {
    const [weather, setWeather] = useState(false);
    const [background, setBackground] = useState(false);
    const [city, setCity] = useState("Warsaw");

    const getWeather = async () => {
        const urlAPI = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${`24963e060cb5fbe4a308a06ae5f8c6f7`}&units=metric`;
        const res = await fetch(urlAPI);
        const data = await res.json();
        setWeather(data);
        console.log(data);
    }

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const submitHandler = (e) => {
        e.preventDefault();
        getWeather();

    }

    useEffect(() => {
        getWeather();
    }, []);

    useEffect(() => {
        const getImage = async () => {
            const url = `https://pixabay.com/api/?key=${`34586294-b634b5be29dfc96939f0d320c`}&q=${weather.weather[0].description.split(" ").join("+")}&image_type=photo`;
            console.log(url);
            const res = await fetch(url);
            const data = await res.json();
            const len = data.hits.length;
            console.log(data.hits[getRandomInt(0, len)].largeImageURL);
            setBackground(data.hits[getRandomInt(0, len)].largeImageURL);
        }
        getImage();
    }, [weather]);

    return (
        <div style={{
            width: "60vw",
            height: "60vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundImage: `url(${background})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
        }}>
            <form onSubmit={submitHandler}>
                <input
                    value={city}
                    onChange={e => setCity(e.target.value)}
                />
                <button>Sprawdź pogodę</button>
            </form>
            {
                weather
                    ?
                    <>
                        <p>Dane poprawne </p>
                        <h1>{weather.name}</h1>
                        <h2>{weather.weather[0].description}</h2>
                        <h2>{weather.main.temp}</h2>
                    </>
                    :
                    <div>
                        Brak danych ... trwa ładowanie
                    </div>
            }
        </div>
    );
};

export default CityWeather;