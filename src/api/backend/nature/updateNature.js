import { getEnviroments } from "../../../helpers/getEnvironments";

export const updateNature = async (nature, token) => {
    try {
        const env = getEnviroments();

        const options = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(nature),
        }
        const response = await fetch(`${env.VITE_BACKEND_URL}/nature`, options);

        const data = await response.json();

        return data;
    } catch (error) {
        return error
    }
}