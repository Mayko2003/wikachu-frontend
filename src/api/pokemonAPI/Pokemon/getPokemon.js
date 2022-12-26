import { getEnviroments } from "../../../helpers/getEnvironments";
export const getPokemon = async (pokemon) => {
    const env = getEnviroments();
    const response = await fetch(
        `${env.VITE_POKEAPI_HOST}/pokemon/${pokemon}`
    );
    const data = await response.json();
    return data;
}