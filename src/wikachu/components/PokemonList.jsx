import { usePokemon } from "../hooks/usePokemon"
import { PokemonCard } from "./PokemonCard"


export const PokemonList = ({amount}) => {

    const { pokemons } = usePokemon(amount);


    return (
        <div className="row mx-auto col-md-8 animate__animated animate__fadeIn">
            {
                pokemons.length > 0 &&
                pokemons.map(pokemon => (
                    <PokemonCard key={pokemon.id} pokemon={pokemon} />
                ))
            }
        </div>
    )
}
