import { getEnviroments } from "../../../helpers/getEnvironments";

export const createFavourite = async (user,pokemon, token) => {
    try{
        if(!token) throw new Error('No token provided');
        const env = getEnviroments();
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify({
                user,
                pokemon
            })
        }
        const response = await fetch(
            `${env.VITE_BACKEND_URL}/favourite/create`, options
        );
        const data = await response.json();
        return data;
    }
    catch(error){
        return error;
    }
}