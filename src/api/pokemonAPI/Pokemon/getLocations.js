import { getEnviroments } from "../../../helpers/getEnvironments";
export const getLocations = async (pokemon) => {
    const env = getEnviroments();
    const response = await fetch(
        `${env.VITE_POKEAPI_HOST}/pokemon/${pokemon}/encounters`
    );
    const data = await response.json();
    return data;
}