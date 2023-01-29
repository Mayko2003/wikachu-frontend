import { updateItem, updateMove, updateNature, updatePokemon } from "../";

export const manageLike = async (obj, type, token) => {
    try {
        if (!token) throw new Error('No token provided');

        switch (type) {
            case 'Item':
                return await updateItem(obj, token)
            case 'Pokemon':
                return await updatePokemon(obj, token)
            case 'Move':
                return await updateMove(obj, token)
            case 'Nature':
                return await updateNature(obj, token)
            default:
                return new Error('Invalid type')
        }
    }
    catch (error) {
        return error;
    }
}