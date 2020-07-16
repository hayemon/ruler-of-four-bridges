import axios from 'axios'
import { setAlert } from './alert'
import {
  ADD_CHARACTER_PROFILE,
  GET_CHARACTER_PROFILES,
  GET_CHARACTER_PROFILE,
  UPDATE_CHARACTER_PROFILE,
  DELETE_CHARACTER_PROFILE,
  ERROR_CHARACTER_PROFILE
} from './types'

// POST
export const addCharacterProfile = formData => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  try {
    const res = await axios.post('/api/characterProfiles', formData, config)

    dispatch({
      type: ADD_CHARACTER_PROFILE,
      data: res.data
    })

    dispatch(setAlert('CharacterProfile Created', 'success'))
  } catch (err) {
    dispatch({
      type: ERROR_CHARACTER_PROFILE,
      data: { msg: err.response.statusText, status: err.response.status }
    })
  }
}

// GET LIST
export const getCharacterProfiles = () => async dispatch => {
  try {
    const res = await axios.get('/api/characterProfiles')

    dispatch({
      type: GET_CHARACTER_PROFILES,
      data: res.data
    })
  } catch (err) {
    dispatch({
      type: ERROR_CHARACTER_PROFILE,
      data: { msg: err.response.statusText, status: err.response.status }
    })
  }
}

// GET SINGLE
export const getCharacterProfile = id => async dispatch => {
  try {
    if (id == 0) {
      dispatch({
        type: GET_CHARACTER_PROFILE,
        data: {}
      })
    }
    else {
      const res = await axios.get(`/api/characterProfiles/${id}`)

      dispatch({
        type: GET_CHARACTER_PROFILE,
        data: res.data
      })
    }
  } catch (err) {
    dispatch({
      type: ERROR_CHARACTER_PROFILE,
      data: { msg: err.response.statusText, status: err.response.status }
    })
  }
}

// PUT
export const updateCharacterProfile = formData => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  try {
    const res = await axios.put(`/api/characterProfiles/${formData._id}`, formData, config)

    dispatch({
      type: UPDATE_CHARACTER_PROFILE,
      data: res.data
    })

    dispatch(setAlert('CharacterProfile Updated', 'success'))
  } catch (err) {
    dispatch({
      type: ERROR_CHARACTER_PROFILE,
      data: { msg: err.response.statusText, status: err.response.status }
    })
  }
}

// DELETE
export const deleteCharacterProfile = id => async dispatch => {
  try {
    await axios.delete(`/api/characterProfiles/${id}`)

    dispatch({
      type: DELETE_CHARACTER_PROFILE,
      data: id
    })

    dispatch(setAlert('CharacterProfile Removed', 'success'))
  } catch (err) {
    dispatch({
      type: ERROR_CHARACTER_PROFILE,
      data: { msg: err.response.statusText, status: err.response.status }
    })
  }
}