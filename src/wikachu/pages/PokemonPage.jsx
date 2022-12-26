import { BrowserRouter } from "react-router-dom";
import { useGetPokemon } from "../hooks/useGetPokemon";
import { PokemonInfoRouter } from "../router/PokemonInfoRouter";

export const PokemonPage = ({ id = 1 }) => {

    const { pokemon } = useGetPokemon(id);

    const imagePokemon = pokemon['sprites']?.['other']['official-artwork']['front_default'];

    return (
        <>
            <h1 className="text-light">{pokemon.name}</h1>

            <div className="row m-0">
                <div className="col-12 col-md-4">
                    <img src={imagePokemon} alt="" className="w-100" />
                </div>
                <div className="col-12 col-md-8 text-light">
                    <BrowserRouter>
                        <PokemonInfoRouter data={pokemon}/>
                    </BrowserRouter>
                </div>
            </div>
        </>
    )
}