import { getEnviroments } from "../../../helpers/getEnvironments";

export const getAllPokemon = async () => {
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

}