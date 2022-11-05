import { getEnviroments } from "../../../helpers/getEnvironments";

export const getAllPokemon = async () => {
    try{
        const env = getEnviroments();
        const response = await fetch(
            `${env.VITE_POKEAPI_HOST}/pokemon?limit=905`
        );
        const { results } = await response.json();
    
        //first get sprite, id and types from each pokemon
        // return await Promise.all(results.map(async(pokemon) => {
        //     const res = await fetch(pokemon.url);
        //     const pokeData = await res.json();
        //     return {...pokemon, id: pokeData.id, types: pokeData.types, sprites: pokeData.sprites};
        // }));
    
        return results
    }catch(err){
        if(err.message === 'Network request failed') return err
        return new Error('Couldn\'t get all pokemons');
    }
    

}