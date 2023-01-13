import { getEnviroments } from "../../../helpers/getEnvironments";
export const getBerryFlavor = async (flavor) => {
    try {
        const env = getEnviroments();
        const response = await fetch(
            `${env.VITE_POKEAPI_HOST}/berry-flavor/${flavor}`
        );
        const { berries } = await response.json();
        return berries;
    }
    catch (error) {
        if (error.message === 'Network request failed')
            return error;
        return new Error('Not Found');
    }
}
