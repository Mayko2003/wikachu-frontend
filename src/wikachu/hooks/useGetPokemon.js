import { useEffect, useState } from "react";
import { getPokemon, getSpecie } from "../../api/pokemonAPI/Pokemon";

export const useGetPokemon = (id) => {
    
    const [pokemon, setPokemon] = useState({});
    
    const [isLoading, setIsLoading] = useState(true);

    const [specie, setSpecie] = useState({});

    const getData = async () => {
        const pokemon = await getPokemon(id);
        const specie = await getSpecie(id)
        setPokemon(pokemon);
        setIsLoading(false);
        setSpecie(specie);
    }

    useEffect(() => {
        getData();
    }, []);


    return {
        pokemon,
        isLoading,
        specie
    }
}
