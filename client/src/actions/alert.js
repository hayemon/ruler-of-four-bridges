import { v4 } from 'uuid'
import {
    SET_ALERT,
    REMOVE_ALERT
} from './types'

export const setAlert = (message, type) => dispatch => {
    const id = v4()
    dispatch({
        type: SET_ALERT,
        data: { message, type, id }
    })

    setTimeout(() => dispatch({ type: REMOVE_ALERT, data: id }), 5000)
}