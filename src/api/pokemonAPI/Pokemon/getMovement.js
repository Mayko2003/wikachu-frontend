import { getEnviroments } from "../../../helpers/getEnvironments";
export const getMovement = async (id = null, name = null) => {
    const env = getEnviroments();
    const response = await fetch(
        `${env.VITE_POKEAPI_HOST}/move/${id || name}`
    );
    const data = await response.json();
    return data;
}