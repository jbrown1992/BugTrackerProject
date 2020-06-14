import { ACTION_TYPES, ACTION_TYPE } from "../actions/bug";

const initialState = {
    list:[]
}


export const bug = (state = initialState,action) =>{
    switch (action.type) {
        case ACTION_TYPE.FETCH_ALL:
            return {
                ...state,
                list: [...action.payload]
            }

            default:
                return state;

    }
}