import { getEnviroments } from "../../../helpers/getEnvironments";
export const getMovement = async (move) => {
    const env = getEnviroments();
    const response = await fetch(
        `${env.VITE_POKEAPI_HOST}/move/${move}`
    );
    const data = await response.json();
    return data;
}