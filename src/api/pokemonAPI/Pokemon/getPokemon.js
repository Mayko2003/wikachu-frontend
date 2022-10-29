
export const getPokemon = async (id = null, name = null) => {
    const response = await fetch(
        `${import.meta.env.VITE_POKEAPI_HOST}/pokemon/${id || name}`
    );
    const data = await response.json();
    return data;
}