import { getEnviroments } from "../../../helpers/getEnvironments";
export const getPokemon = async (pokemon) => {
    try {
        const env = getEnviroments();
        const response = await fetch(
            `${env.VITE_POKEAPI_HOST}/pokemon/${pokemon}`
        );
        const data = await response.json();
        return data;
    }
    catch (error) {
        return error;
    }

}