import { getEnviroments } from "../../../helpers/getEnvironments";
export const getNature = async (nature) => {
    const env = getEnviroments();
    const response = await fetch(
        `${env.VITE_POKEAPI_HOST}/nature/${nature}`
    );
    const data = await response.json();
    return data;
}