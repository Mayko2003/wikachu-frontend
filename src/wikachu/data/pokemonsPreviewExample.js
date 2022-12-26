import { pokemonTypes } from './pokemonTypes'

export const pokemons = [
    {
        id: 1,
        name: 'Bulbasaur',
        types: [
            pokemonTypes.grass,
            pokemonTypes.poison
        ],
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'
    },
    {
        id: 2,
        name: 'Ivysaur',
        types: [
            pokemonTypes.grass,
            pokemonTypes.poison
        ],
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png'
    },
    {
        id: 4,
        name: 'Charmander',
        types: [
            pokemonTypes.fire
        ],
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png'

    },
    {
        id: 5,
        name: 'Charmeleon',
        types: [
            pokemonTypes.fire
        ],
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png'
    },
    {
        id: 6,
        name: 'Charizard',
        types: [
            pokemonTypes.fire,
            pokemonTypes.flying
        ],
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png'
    },
    {
        id: 7,
        name: 'Squirtle',
        types: [
            pokemonTypes.water
        ],
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png'
    },
    {
        id: 8,
        name: 'Wartortle',
        types: [
            pokemonTypes.water
        ],
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png'
    }
]