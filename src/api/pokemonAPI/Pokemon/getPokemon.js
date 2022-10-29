import { getEnviroments } from "../../../helpers/getEnvironments";
export const getPokemon = async (id = null, name = null) => {
    const env = getEnviroments();
    const response = await fetch(
        `${env.VITE_POKEAPI_HOST}/pokemon/${id || name}`
    );
    const data = await response.json();
    return data;
}