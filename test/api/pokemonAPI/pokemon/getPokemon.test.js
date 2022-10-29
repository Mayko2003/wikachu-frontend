import { getPokemon } from "../../../../src/api/pokemonAPI/Pokemon/getPokemon";

describe("Test getPokemon service", () => {

    test('should return a pokemon', async() => {

        const pokemon = await getPokemon(null, 'pikachu');
        
        expect(pokemon.name).toBe("pikachu");

    })
})