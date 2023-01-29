import { getEnviroments } from "../../../helpers/getEnvironments";

export const getNature = async (id) => {
    try {
        const env = getEnviroments();

        const response = await fetch(`${env.VITE_BACKEND_URL}/nature/find/${id}`);
        const { data } = await response.json();

        return data;
    } catch (error) {
        return error
    }
}