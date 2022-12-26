import { getAbility } from "../../../../src/api/pokemonAPI/Pokemon"

describe('Tests on getAbility service', () => {

    test('should return an ability', async () => {
        const ability = await getAbility(null, 'chlorophyll');
        expect(ability.name).toBe('chlorophyll');
    })

    test('should return an error from non-existent ability', async () => {
        const err = await getAbility(null, 'non-existent-ability');
        expect(err.message).toBe('Not Found');
    })
})