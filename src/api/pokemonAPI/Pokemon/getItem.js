import { getEnviroments } from "../../../helpers/getEnvironments";
export const getItem = async (item) => {
    const env = getEnviroments();
    const response = await fetch(
        `${env.VITE_POKEAPI_HOST}/item/${item}`
    );
    const data = await response.json();
    return data;
}