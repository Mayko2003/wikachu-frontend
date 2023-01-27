import { useEffect, useState } from "react";
import { getPokemon } from "../../api/pokemonAPI/Pokemon";


//get pokemon from the pokemon api
export const useGetPokemon = (id) => {
    
    const [pokemon, setPokemon] = useState({});
    
    const [isLoading, setIsLoading] = useState(true);

    const getData = async () => {
        const pokemon = await getPokemon(id);
        setPokemon(pokemon);
        setIsLoading(false);
    }

    useEffect(() => {
        getData();
    }, []);


    return {
        pokemon,
        isLoading,
    }
}
