import {CLOSE_SIGNIN, OPEN_SIGNIN} from './Types'

export const signInInitialState = {
    isSignIn: false
}

export const signInReducer = (state = signInInitialState, action:any) => {
    switch(action.type){
        case CLOSE_SIGNIN: return {
            ...state,
            isSignIn: false
        }
        case OPEN_SIGNIN: return{
            ...state,
            isSignIn: true
        }
        default: return state
    }
}