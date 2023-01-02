import { getEnviroments } from "../../../helpers/getEnvironments";

export const checkFavourite = async (user, obj, token) => {
    try {
        if (!token) throw new Error('No token provided');
        const env = getEnviroments();
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                user,
                obj
            })
        }
        const response = await fetch(
            `${env.VITE_BACKEND_URL}/favourite/check`, options
        );
        const {data} = await response.json();
        return data;
    }
    catch (error) {
        return error;
    }
}