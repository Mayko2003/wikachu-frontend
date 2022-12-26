import { PokemonCard } from "./PokemonCard"



export const PokemonList = ({ pokemons }) => {
    return (
        <div className="row mx-auto col-md-8 animate__animated animate__fadeIn">
            {
                pokemons.map(pokemon => (
                    <PokemonCard key={pokemon.id} pokemon={pokemon} />
                ))
            }
        </div>
    )
}
