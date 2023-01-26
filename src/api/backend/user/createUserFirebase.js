import { getEnviroments } from "../../../helpers/getEnvironments";

export const createUserFirebase = async (idToken,user) => {
    try {
        if (!idToken) throw new Error('No token provided');
        const env = getEnviroments();
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${idToken}`
            },
            body: JSON.stringify({
                ...user
            })
        }
        const response = await fetch(
            `${env.VITE_BACKEND_URL}/user/create-firebase`, options
        );
        const data = await response.json();
        return data;
    }
    catch (error) {
        return error;
    }
}
