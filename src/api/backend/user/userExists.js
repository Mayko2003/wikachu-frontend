import { getEnviroments } from "../../../helpers/getEnvironments";

export const userExists = async (idToken) => {
    try {
        if (!idToken) throw new Error('No token provided');
        const env = getEnviroments();
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${idToken}`
            }
        }
        const response = await fetch(
            `${env.VITE_BACKEND_URL}/user/exists`, options
        );
        const data = await response.json();
        return data;
    }
    catch (error) {
        return error;
    }
}
