import React, {useEffect, useState} from 'react';

const PokeApi = () => {
    const url = 'https://pokeapi.co/api/v2/pokemon'
    const [pokeArray, setPokeArray] = useState([])

    const getPokemons = async () => {
        const respons = await fetch(url)
        const data = await respons.json()
        // const arrayPok = data.results
        console.log(data.results)
        setPokeArray(data.results)

    }

    useEffect(() => {
        getPokemons()
    }, [])



    return (
        <div>
            {
                !pokeArray ?
                    <h1>Pobieram dane</h1>
                    :
                    pokeArray.map((element, index) =>
                        <ul className="list">
                            <li key={index}>{element.name}</li>
                        </ul>)
            }
        </div>
    );
};

export default PokeApi;