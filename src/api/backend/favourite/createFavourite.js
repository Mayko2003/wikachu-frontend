import { getEnviroments } from "../../../helpers/getEnvironments";

export const createFavourite = async (user,obj, type, token) => {
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
                obj,
                onModel: type
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