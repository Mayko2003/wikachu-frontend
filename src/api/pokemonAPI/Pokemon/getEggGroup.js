import { getEnviroments } from "../../../helpers/getEnvironments";
export const getEggGroup = async (group) => {
    const env = getEnviroments();
    const response = await fetch(
        `${env.VITE_POKEAPI_HOST}/egg-group/${group}`
    );
    const data = await response.json();
    return data;
}