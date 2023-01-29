import { getEnviroments } from "../../../helpers/getEnvironments";

export const getPopularItems = async () => {
    try {
        const env = getEnviroments();
        const response = await fetch(
            `${env.VITE_BACKEND_URL}/item/popular`
        );
        const {data} = await response.json();
        return data;
    }
    catch (error) {
        return error;
    }
}