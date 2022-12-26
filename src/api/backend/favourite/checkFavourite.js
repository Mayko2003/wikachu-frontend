import { getEnviroments } from "../../../helpers/getEnvironments";

export const checkFavourite = async (user, pokemon) => {
    try {
        const env = getEnviroments();
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user,
                pokemon
            })
        }
        const response = await fetch(
            `${env.VITE_BACKEND_URL}/favourite/check`, options
        );
        const data = await response.json();
        return data;
    }
    catch (error) {
        return error;
    }
}