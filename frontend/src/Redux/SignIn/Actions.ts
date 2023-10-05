import {CLOSE_SIGNIN, OPEN_SIGNIN} from './Types'

export const closeSignIn = () => {
    return {
        type: CLOSE_SIGNIN
    }
}

export const openSignIn = () => {
    return {
        type: OPEN_SIGNIN
    }
}