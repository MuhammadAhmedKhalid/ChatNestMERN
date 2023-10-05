import {CLOSE_SIGNUP, OPEN_SIGNUP} from './Types'

export const signUpInitialState = {
    isSignUp: false
}

export const signUpReducer = (state = signUpInitialState, action:any) => {
    switch(action.type){
        case CLOSE_SIGNUP: return {
            ...state,
            isSignUp: false
        }
        case OPEN_SIGNUP: return{
            ...state,
            isSignUp: true
        }
        default: return state
    }
}