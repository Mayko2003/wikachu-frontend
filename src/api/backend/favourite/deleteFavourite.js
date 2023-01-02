import { getEnviroments } from "../../../helpers/getEnvironments";

export const deleteFavourite = async (user,obj, token) => {
    try {
        if (!token) throw new Error('No token provided');
        const env = getEnviroments();
        const options = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify({
                user,
                obj
            })
        }
        const response = await fetch(
            `${env.VITE_BACKEND_URL}/favourite/delete`, options
        );
        const data = await response.json();
        return data;
    }
    catch (error) {
        return error;
    }
}
