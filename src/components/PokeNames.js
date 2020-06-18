import React from "./node_modules/react";

export const PokeNames = ({ pokemons }) => {

    // const { pokemon } = this.state;

    // var arr = [];

    // for (var key in pokemon) {
    //   arr.push(pokemon[key]);
    // }



    return (
        <div>
            <h1>PokeNames</h1>
            {pokemons.map((pokemon, i) => (
                <div key={i}>
                    <li>
                        {pokemon.name} &nbsp;
                        <span>{pokemon.id}</span>
                    </li>
                </div>  
            ))}
        </div>  
    )
};