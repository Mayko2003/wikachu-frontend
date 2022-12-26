import { types } from "../types/types"


export const likeReducer = (state = {}, action) => {

    switch (action.type) {
        case types.like.pokemon:
            break;
        case types.like.item:
            break;
        case types.like.move:
            break;
        case types.like.ability:
            break;
        case types.like.location:
            break;
        case types.like.type:
            break;
        case types.like.nature:
            break;
        default:
            return state;
    }

}