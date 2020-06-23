import { combineReducers } from "redux" 
import { bug } from "./bugs"
import  loggedReducer  from "./isLogged"

export const reducers = combineReducers({
    bug, 
    isLogged: loggedReducer
})