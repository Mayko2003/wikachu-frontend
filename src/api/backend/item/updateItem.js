import { getEnviroments } from "../../../helpers/getEnvironments";

export const updateItem = async (item, token) => {
    try {
        const env = getEnviroments();

        const options = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(item),
            
        }
        const response = await fetch(`${env.VITE_BACKEND_URL}/item`, options);

        const data = await response.json();

        return data;
    } catch (error) {
        return error
    }
}