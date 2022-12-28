import { getEnviroments } from "../../../helpers/getEnvironments";

export const createUser = async (user) => {
    try {
        const env = getEnviroments();
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ...user
            })
        }
        const response = await fetch(
            `${env.VITE_BACKEND_URL}/user/create`, options
        );
        const data = await response.json();
        return data;
    }
    catch (error) {
        return error;
    }
}
