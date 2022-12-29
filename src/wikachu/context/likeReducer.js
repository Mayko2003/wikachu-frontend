import { types } from "../types/types"


export const likeReducer = (state = false, action) => {

    switch (action.type) {
        case types.create:
            return true;
        case types.delete:
            return false;
        default:
            return state;
    }

}