import React, { useState } from 'react';

const FetchPokemon = () => {
    const [allPokemonNames, setAllPokemonNames] = useState(null);

    const clickHandler = e =>{
        fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1118')
        .then(response=> response.json())
        .then(response => setAllPokemonNames(response.results))
        .catch(err=>{
            console.log(err)
        })
    }
    console.log(allPokemonNames)
    return(
    <div>
        <button className="btn btn-success m-5"
        onClick={clickHandler}
        >Fetch Pokemon</button>
        {allPokemonNames.map((item, i) => <p key={i}>{item.name}</p>)}
    </div>
    )
};

export default FetchPokemon;
