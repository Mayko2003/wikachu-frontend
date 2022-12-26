import { getEnviroments } from "../../../helpers/getEnvironments";

export const updatePokemon = async (pokemon) => {
    try {
        const env = getEnviroments();

        const options = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(pokemon),
        }

        const response = await fetch(
            `${env.VITE_BACKEND_URL}/pokemon/${pokemon.id}`, options
        );
        const data = await response.json();
        return data;
    }
    catch (error) {
        return error;
    }
}