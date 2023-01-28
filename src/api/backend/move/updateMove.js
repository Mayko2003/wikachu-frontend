import { getEnviroments } from "../../../helpers/getEnvironments";

export const updateMove = async (move) => {
    try {
        const env = getEnviroments();

        const options = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(move),
        }
        const response = await fetch(`${env.VITE_BACKEND_URL}/move`, options);

        const { data } = await response.json();

        return data;
    } catch (error) {
        return error
    }
}