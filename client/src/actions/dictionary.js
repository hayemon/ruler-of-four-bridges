import axios from 'axios'
import { setAlert } from './alert'
import {
  ADD_DICTIONARY,
  GET_DICTIONARIES,
  GET_DICTIONARY,
  UPDATE_DICTIONARY,
  DELETE_DICTIONARY,
  ERROR_DICTIONARY
} from './types'

// POST
export const addDictionary = formData => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  try {
    const res = await axios.post('/api/dictionaries', formData, config)

    dispatch({
      type: ADD_DICTIONARY,
      data: res.data
    })

    dispatch(setAlert('Dictionary Created', 'success'))
  } catch (err) {
    dispatch({
      type: ERROR_DICTIONARY,
      data: { msg: err.response.statusText, status: err.response.status }
    })
  }
}

// GET LIST
export const getDictionaries = () => async dispatch => {
  try {
    const res = await axios.get('/api/dictionaries')

    dispatch({
      type: GET_DICTIONARIES,
      data: res.data
    })
  } catch (err) {
    dispatch({
      type: ERROR_DICTIONARY,
      data: { msg: err.response.statusText, status: err.response.status }
    })
  }
}

// GET SINGLE
export const getDictionary = id => async dispatch => {
  try {
    if (id == 0) {
      dispatch({
        type: GET_DICTIONARY,
        data: {}
      })
    }
    else {
      const res = await axios.get(`/api/dictionaries/${id}`)

      dispatch({
        type: GET_DICTIONARY,
        data: res.data
      })
    }
  } catch (err) {
    dispatch({
      type: ERROR_DICTIONARY,
      data: { msg: err.response.statusText, status: err.response.status }
    })
  }
}

// PUT
export const updateDictionary = formData => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  try {
    const res = await axios.put(`/api/dictionaries/${formData._id}`, formData, config)

    dispatch({
      type: UPDATE_DICTIONARY,
      data: res.data
    })

    dispatch(setAlert(`${formData.name} сохранено`, 'success'))
  } catch (err) {
    dispatch({
      type: ERROR_DICTIONARY,
      data: { msg: err.response.statusText, status: err.response.status }
    })
  }
}

// DELETE
export const deleteDictionary = id => async dispatch => {
  try {
    await axios.delete(`/api/dictionaries/${id}`)

    dispatch({
      type: DELETE_DICTIONARY,
      data: id
    })

    dispatch(setAlert('Dictionary Removed', 'success'))
  } catch (err) {
    dispatch({
      type: ERROR_DICTIONARY,
      data: { msg: err.response.statusText, status: err.response.status }
    })
  }
}