import { getEnviroments } from "../../../helpers/getEnvironments";
export const getItem = async (id = null, name = null) => {
    const env = getEnviroments();
    const response = await fetch(
        `${env.VITE_POKEAPI_HOST}/item/${id || name}`
    );
    const data = await response.json();
    return data;
}