import { getEnviroments } from "../../../helpers/getEnvironments";

export const getUserLogged = async (token) => {
    try {
        if (!token) throw new Error('No token provided');
        const env = getEnviroments();
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }
        const response = await fetch(
            `${env.VITE_BACKEND_URL}/user/logged`,options
        );
        const { data } = await response.json();
        return data;
    }
    catch (error) {
        return error;
    }
}
