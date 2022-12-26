import { getEnviroments } from "../../../helpers/getEnvironments";
export const getSpecie = async (specie) => {
    const env = getEnviroments();
    const response = await fetch(
        `${env.VITE_POKEAPI_HOST}/pokemon-species/${specie}`
    );
    const data = await response.json();
    return data;
}
