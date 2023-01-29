import { useState, useEffect } from 'react'
import { getPokemon } from '../../../api/pokemonAPI/Pokemon'


//get pokemons from a list of ids
export const useGetPokemonsByIds = (listPokemons = []) => {
    const [pokemons, setPokemons] = useState({
        isLoading: true,
        data: []
    })

    const getData = async () => {

        const pokes = await Promise.all(listPokemons?.map(async (pokemon) => {
            const data = await getPokemon(pokemon.id)
            const poke = {
                types: data.types,
                id: data.id,
                name: pokemon.name,
                image: data.sprites.other.home.front_default,
                _id: pokemon._id
            }
            return poke
        }))
        return pokes
    }

    useEffect(() => {
        getData().then((pokes) => {
            setPokemons({
                isLoading: false,
                data: pokes.sort((a, b) => a.id - b.id)
            })
        })

    }, [])


    return {
        ...pokemons
    }
}
