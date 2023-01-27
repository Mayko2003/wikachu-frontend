import { useEffect } from "react"
import { useState } from "react"

//get pokemons from a list of urls from the pokemon api
export const useGetPokemonsByUrls = (pokemons) => {

    const [state, setState] = useState({
        isLoading: true,
        data: null
    })

    const getPokemons = async () => {
        if (!pokemons) return;

        const pokes = await Promise.all(pokemons.map(async (poke) => {

            let res = await fetch(poke.url)
            let data = await res.json()

            res = await fetch(data.species.url)
            data = await res.json()

            res = await fetch(data.varieties[0].pokemon.url)
            data = await res.json()

            return data
        }))

        return pokes
    }

    useEffect(() => {
        getPokemons().then((pokes) => {
            setState({
                isLoading: false,
                data: // only return unique pokemons by name
                    pokes.filter((poke, index, self) =>
                        index === self.findIndex((t) => (
                            t.name === poke.name
                        ))
                    ).sort((a, b) => a.id - b.id)
            })
        })
    }, [pokemons])


    return {
        ...state
    }
}
