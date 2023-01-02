import { useParams } from "react-router-dom";
import { capitalize } from "../helpers/capitalize";
import { useGetPokemon } from "../hooks/useGetPokemon";
import { PokemonRoutes } from "../routes";

export const PokemonPage = () => {

    const { id_name } = useParams();

    const { pokemon } = useGetPokemon(id_name);

    const sprites = {
        home: {
            frontDefault: pokemon['sprites']?.['other']['home']['front_default'],
            frontShiny: pokemon['sprites']?.['other']['home']['front_shiny'],
        },
        official: pokemon['sprites']?.['other']['official-artwork']['front_default'],
        dreamWorld: pokemon['sprites']?.['other']['dream_world']['front_default'],
        default: {
            male: {
                frontDefault: pokemon['sprites']?.['front_default'],
                frontShiny: pokemon['sprites']?.['front_shiny'],
                backDefault: pokemon['sprites']?.['back_default'],
                backShiny: pokemon['sprites']?.['back_shiny'],
            },
            female: {
                frontDefault: pokemon['sprites']?.['front_female'],
                frontShiny: pokemon['sprites']?.['front_shiny_female'],
                backDefault: pokemon['sprites']?.['back_female'],
                backShiny: pokemon['sprites']?.['back_shiny_female']
            }
        }
    }

    return (
        <>
            <h1 className="text-light text-center my-5">{capitalize(pokemon.name)}</h1>

            <div className="row m-0">
                <div className="col-12 col-lg-4 d-flex justify-content-center animate__animated animate__fadeInLeft">
                    <img src={sprites.home.frontDefault} alt="" className="img-front-pokemon img-fluid" />
                </div>
                <div className="col-12 col-lg-8 text-light ">
                    <PokemonRoutes data={pokemon} />
                </div>
            </div>
        </>
    )
}