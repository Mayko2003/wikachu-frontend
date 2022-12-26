import { getEnviroments } from "../../../helpers/getEnvironments";
export const getAbility = async (ability) => {
    const env = getEnviroments();
    const response = await fetch(
        `${env.VITE_POKEAPI_HOST}/ability/${ability}`
    );
    const data = await response.json();
    return data;
}