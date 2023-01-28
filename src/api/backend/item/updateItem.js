import { getEnviroments } from "../../../helpers/getEnvironments";

export const updateItem = async (item) => {
    try {
        const env = getEnviroments();

        const options = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(item),
        }
        const response = await fetch(`${env.VITE_BACKEND_URL}/item`, options);

        const { data } = await response.json();

        return data;
    } catch (error) {
        return error
    }
}