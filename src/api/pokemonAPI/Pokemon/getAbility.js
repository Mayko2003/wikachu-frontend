import { getEnviroments } from "../../../helpers/getEnvironments";
export const getAbility = async (id = null, name = null) => {
    try {
        const env = getEnviroments();
        const response = await fetch(
            `${env.VITE_POKEAPI_HOST}/ability/${id || name}`
        );
        const data = await response.json();
        return data;
    }catch(err){
        if(err.message === 'Network request failed') return err
        return new Error('Not Found');
    }
}