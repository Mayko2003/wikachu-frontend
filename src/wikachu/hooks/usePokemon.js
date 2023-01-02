import { useState, useEffect } from 'react'
import { getPokemons, getPopular } from '../../api/backend/pokemon'
import { getPokemon } from '../../api/pokemonAPI/Pokemon'

export const usePokemon = (amount) => {
    const [pokemons, setPokemons] = useState({
        isLoading: true,
        data: []
    })

    const getData = async () => {
        let res
        if(amount === 'Popular') res = await getPopular()
        else res = await getPokemons()

        const { data } = res
        let pokemons = []

        data.map((pokemon) => {
            getPokemon(pokemon.id).then((poke) => {
                const newPokemon = {
                    types: poke.types,
                    id: poke.id,
                    name: pokemon.name,
                    image: poke.sprites.other.home.front_default,
                    _id: pokemon._id
                }
                pokemons = [...pokemons, newPokemon].sort((a, b) => a.id - b.id)
                setPokemons({
                    isLoading: false,
                    data: pokemons
                })
            })
        })
    }

    useEffect(() => {
        getData().then(() => {
            setPokemons(prev => ({
                ...prev,
                isLoading: false
            }))
        })

    }, [])


    return {
        ...pokemons
    }
}
