import { getEnviroments } from "../../../helpers/getEnvironments";

export const getResults = async (query) => {

    try {
        const env = getEnviroments();
        const resp = await fetch(`${env.VITE_BACKEND_URL}/search?q=${query}`);
        const { data } = await resp.json();
        return data;
    } catch (error) {
        return error;
    }
}

