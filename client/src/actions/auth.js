import axios from 'axios'

import { setAlert } from './alert'
import {
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    SIGNIN_SUCCESS,
    SIGNIN_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    SIGNOUT,
    CLEAR_PROFILE
} from './types'

export const loadUser = () => async (dispatch) => {
    try {
        const res = await axios.get('/api/auth')

        dispatch({
            type: USER_LOADED,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: AUTH_ERROR
        })
    }
}

export const signout = () => (dispatch) => {
    dispatch({ type: CLEAR_PROFILE })
    dispatch({ type: SIGNOUT })
}

export const signup = ({ username, email, password }) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ username, email, password })

    try {
        const res = await axios.post('/api/users', body, config)
        dispatch({
            type: SIGNUP_SUCCESS,
            data: res.data
        })
        dispatch(loadUser())
    }
    catch (err) {
        const errors = err.response.data.errors
        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'error')))
        }
        dispatch({
            type: SIGNUP_FAIL
        })
    }
}

export const signin = ({ email, password }) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ email, password })

    try {
        const res = await axios.post('/api/auth', body, config)
        dispatch({
            type: SIGNIN_SUCCESS,
            data: res.data
        })
        dispatch(loadUser())
    }
    catch (err) {
        const errors = err.response.data.errors
        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'error')))
        }
        dispatch({
            type: SIGNIN_FAIL
        })
    }
}