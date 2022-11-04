import { getEnviroments } from "../../../helpers/getEnvironments";
export const getEggGroup = async (id = null, name = null) => {
    const env = getEnviroments();
    const response = await fetch(
        `${env.VITE_POKEAPI_HOST}/egg-group/${id || name}`
    );
    const data = await response.json();
    return data;
}