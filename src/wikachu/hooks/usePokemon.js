import { useState, useEffect } from 'react'
import { getPokemons, getPopular } from '../../api/backend/pokemon'
import { getPokemon } from '../../api/pokemonAPI/Pokemon'

export const usePokemon = (amount) => {
    const [pokemons, setPokemons] = useState([])

    const getData = async () => {
        let res
        if(amount === 'Popular') res = await getPopular()
        else res = await getPokemons()

        const { data } = res
        let pokemons = []

        data.map((pokemon) => {
            getPokemon(pokemon.id_pokemon).then((poke) => {
                const newPokemon = {
                    types: poke.types,
                    id: poke.id,
                    name: pokemon.name,
                    image: poke.sprites.other.home.front_default
                }
                pokemons = [...pokemons, newPokemon].sort((a, b) => a.id - b.id)
                setPokemons(pokemons)
            })
        })
    }

    useEffect(() => {
        getData();

    }, [])


    return {
        pokemons
    }
}
