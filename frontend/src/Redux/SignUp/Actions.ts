import {CLOSE_SIGNUP, OPEN_SIGNUP} from './Types'

export const closeSignUp = () => {
    return {
        type: CLOSE_SIGNUP
    }
}

export const openSignUp = () => {
    return {
        type: OPEN_SIGNUP
    }
}