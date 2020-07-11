import {
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    SIGNIN_SUCCESS,
    SIGNIN_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    SIGNOUT
} from '../actions/types'

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null
}

export default (state = initialState, action) => {
    const { type, data } = action

    switch (type) {
        case SIGNUP_SUCCESS:
            localStorage.setItem('token', data.token)
            return {
                ...state,
                ...data,
                isAuthenticated: true,
                loading: false
            }
        case SIGNUP_FAIL:
            localStorage.removeItem('token')
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false
            }
        case SIGNIN_SUCCESS:
            return {
                ...state,
                ...data,
                isAuthenticated: true,
                loading: false
            }
        case SIGNIN_FAIL:
            localStorage.removeItem('token')
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false
            }
        case AUTH_ERROR:
        case SIGNOUT:
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false,
                user: null
            }
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: data
            }
        default:
            return state
    }
}