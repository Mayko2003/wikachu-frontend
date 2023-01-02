import { getEnviroments } from "../../../helpers/getEnvironments";
export const getMovement = async (move) => {
    try {
        const env = getEnviroments();
        const response = await fetch(
            `${env.VITE_POKEAPI_HOST}/move/${move}`
        );
        const data = await response.json();
        return data;
    }
    catch (error) {
        if (error.message === 'Network request failed')
            return error;
        return new Error('Not Found');
    }
}