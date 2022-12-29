import { getEnviroments } from "../../../helpers/getEnvironments";

export const getUsers = async () => {
    try {
        const env = getEnviroments();
        const response = await fetch(
            `${env.VITE_BACKEND_URL}/user`
        );
        const data = await response.json();
        return data;
    }
    catch (error) {
        return error;
    }
}
