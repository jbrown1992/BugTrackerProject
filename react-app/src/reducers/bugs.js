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

            case ACTION_TYPE.CREATE:
                return {
                    ...state,
                    list: [...state.list, action.payload]
                }

                case ACTION_TYPE.UPDATE:
                    return {
                        ...state,
                        list: state.list.map(x => x.id == ACTION_TYPE.payload.id ? action.payload : x)
                    }


                    
                case ACTION_TYPE.DELETE:
                    return {
                        ...state,
                        list: state.list.filter(x => x.id != action.payload)
                    }

            default:
                return state;

    }
}