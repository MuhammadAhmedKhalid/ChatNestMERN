import { combineReducers } from "redux";
import { signInReducer } from './SignIn/Reducer'
import { signUpReducer } from './SignUp/Reducer'

export const rootReducer = combineReducers({
    signInReducer, signUpReducer,
})