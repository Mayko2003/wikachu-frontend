import { getEnviroments } from "../../../helpers/getEnvironments";

export const updateMove = async (move, token) => {
    try {
        const env = getEnviroments();

        const options = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(move),
        }
        const response = await fetch(`${env.VITE_BACKEND_URL}/move/update/${move._id}`, options);

        const data = await response.json();

        return data;
    } catch (error) {
        return error
    }
}