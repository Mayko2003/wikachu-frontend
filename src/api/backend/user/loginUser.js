import { getEnviroments } from "../../../helpers/getEnvironments";

export const loginUser = async (username,password) => {
    try {
        const env = getEnviroments();
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            })
        }
        const response = await fetch(
            `${env.VITE_BACKEND_URL}/user/login`, options
        );
        const data = await response.json();
        return data;
    }
    catch (error) {
        return error;
    }
}
