import { getAllPokemon } from "../../../../src/api/pokemonAPI/Pokemon"

describe('Tests on getAllPokemon service', () => {
    
    test('should return a list of pokemons', async() => {
        const pokemons = await getAllPokemon();
        expect(pokemons.length).toBe(905);
    })
})