import { useEffect, useState } from "react";
import { getPokemon, getSpecie } from "../../../api/pokemonAPI/Pokemon";
import { useNavigate } from "react-router-dom";


//get pokemon from the pokemon api
export const useGetPokemon = (id) => {

    const [pokemon, setPokemon] = useState(undefined);

    const [isLoading, setIsLoading] = useState(true);

    const [specie, setSpecie] = useState(undefined);

    const [sprites, setSprites] = useState(undefined);

    const navigate = useNavigate()

    const getData = async () => {
        const pokemon = await getPokemon(id);
        const specie = await getSpecie(id)

        //if pokemon or especie is an error navigate to '/404'
        if (pokemon instanceof Error || specie instanceof Error) navigate('/404')

        setPokemon(pokemon);
        setIsLoading(false);
        setSpecie(specie);
        setSprites({
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
        })

    }

    useEffect(() => {
        getData();
    }, []);


    return {
        pokemon,
        isLoading,
        specie,
        sprites
    }
}
