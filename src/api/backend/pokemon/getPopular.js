import { getEnviroments } from "../../../helpers/getEnvironments";

export const getPopular = async () => {
    try {
        const env = getEnviroments();
        const response = await fetch(
            `${env.VITE_BACKEND_URL}/pokemon/popular`
        );
        const {data} = await response.json();
        return data;
    }
    catch (error) {
        return error;
    }
}