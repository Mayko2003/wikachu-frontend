import { useState, useEffect } from 'react'
import { getPokemon } from '../../../api/pokemonAPI/Pokemon'


//get pokemons from a list of ids
export const useGetPokemonsByIds = (listPokemons = [], type) => {
    const [pokemons, setPokemons] = useState({
        isLoading: true,
        data: []
    })

    const fetchPokemon = async (pokemon) => {
        const data = await getPokemon(pokemon.id)
        const poke = {
            types: data.types,
            id: data.id,
            name: pokemon.name,
            image: data.sprites.other.home.front_default,
            likes: pokemon.likes,
            _id: pokemon._id
        }
        return poke
    }

    const getData = async () => {

        let promises = []

        for (let i = 0; i < 12 && i < listPokemons.length; i++) {
            promises = [...promises, fetchPokemon(listPokemons[i])]
        }

        const pokes = await Promise.all(promises)
        return pokes
    }

    const handleLoadMore = async () => {

        let promises = []
        for (let i = pokemons.data.length; i < pokemons.data.length + 12 && i < listPokemons.length; i++) {
            promises = [...promises, fetchPokemon(listPokemons[i])]
        }

        const pokes = await Promise.all(promises)

        setPokemons({
            isLoading: false,
            data: [...pokemons.data, ...pokes]
        })

    }

    useEffect(() => {
        getData().then((pokes) => {
            setPokemons({
                isLoading: false,
                data: type == 'home' ? pokes.sort((a, b) => b.likes - a.likes) : pokes.sort((a, b) => a.id - b.id)
            })
        })

    }, [])


    return {
        ...pokemons,
        handleLoadMore
    }
}
