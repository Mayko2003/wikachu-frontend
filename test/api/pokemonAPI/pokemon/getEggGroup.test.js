import { getEggGroup } from "../../../../src/api/pokemonAPI/Pokemon"

describe('Tests on getEggGroup service', () => {
    test('should return an egg group', async () => {
        const eggGroup = await getEggGroup(null, 'monster');
        expect(eggGroup.name).toBe('monster');
    })

    test('should return an error from non-existent egg group', async () => {
        const err = await getEggGroup(null, 'non-existent-egg-group');
        expect(err.message).toBe('Not Found');
    })
})