import { getEnviroments } from "../../../helpers/getEnvironments";

export const getMove = async (id) => {
    try {
        const env = getEnviroments();

        const response = await fetch(`${env.VITE_BACKEND_URL}/move/${id}`);
        const { data } = await response.json();

        return data;
    } catch (error) {
        return error
    }
}