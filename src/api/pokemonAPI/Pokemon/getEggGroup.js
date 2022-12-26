import { getEnviroments } from "../../../helpers/getEnvironments";

export const getEggGroup = async (group) => {
    try {
        const env = getEnviroments();
        const response = await fetch(
            `${env.VITE_POKEAPI_HOST}/egg-group/${group}`
        );
        const data = await response.json();
        return data;
    }catch(err){
        if(err.message === 'Network request failed') return err
        return new Error('Not Found');
    }
}