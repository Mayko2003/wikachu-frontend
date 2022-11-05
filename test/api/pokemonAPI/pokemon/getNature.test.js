import { getNature } from "../../../../src/api/pokemonAPI/Pokemon";

describe('Tests on getNature service', () => {


    test('service should return a nature', async () => {
        const nature = await getNature(null, 'modest');
        expect(nature.name).toBe('modest');
    })

    test('service should return an error from non-existent nature', async() => {
        const err = await getNature(null, 'non-existent-nature');
        expect(err.message).toBe('Not Found');
    })
})