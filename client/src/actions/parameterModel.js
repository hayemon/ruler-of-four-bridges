import axios from 'axios'
import { setAlert } from './alert'
import {
  ADD_PARAMETER_MODEL,
  GET_PARAMETER_MODELS,
  GET_PARAMETER_MODEL,
  UPDATE_PARAMETER_MODEL,
  DELETE_PARAMETER_MODEL,
  ERROR_PARAMETER_MODEL
} from './types'

// POST
export const addParameterModel = formData => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  try {
    const res = await axios.post('/api/parameterModels', formData, config)

    dispatch({
      type: ADD_PARAMETER_MODEL,
      data: res.data
    })

    dispatch(setAlert('ParameterModel Created', 'success'))
  } catch (err) {
    dispatch({
      type: ERROR_PARAMETER_MODEL,
      data: { msg: err.response.statusText, status: err.response.status }
    })
  }
}

// GET LIST
export const getParameterModels = () => async dispatch => {
  try {
    const res = await axios.get('/api/parameterModels')

    dispatch({
      type: GET_PARAMETER_MODELS,
      data: res.data
    })
  } catch (err) {
    dispatch({
      type: ERROR_PARAMETER_MODEL,
      data: { msg: err.response.statusText, status: err.response.status }
    })
  }
}

// GET SINGLE
export const getParameterModel = id => async dispatch => {
  try {
    if (id == 0) {
      dispatch({
        type: GET_PARAMETER_MODEL,
        data: {}
      })
    }
    else {
      const res = await axios.get(`/api/parameterModels/${id}`)

      dispatch({
        type: GET_PARAMETER_MODEL,
        data: res.data
      })
    }
  } catch (err) {
    dispatch({
      type: ERROR_PARAMETER_MODEL,
      data: { msg: err.response.statusText, status: err.response.status }
    })
  }
}

// PUT
export const updateParameterModel = formData => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  try {
    const res = await axios.put(`/api/parameterModels/${formData._id}`, formData, config)

    dispatch({
      type: UPDATE_PARAMETER_MODEL,
      data: res.data
    })

    dispatch(setAlert('ParameterModel Updated', 'success'))
  } catch (err) {
    dispatch({
      type: ERROR_PARAMETER_MODEL,
      data: { msg: err.response.statusText, status: err.response.status }
    })
  }
}

// DELETE
export const deleteParameterModel = id => async dispatch => {
  try {
    await axios.delete(`/api/parameterModels/${id}`)

    dispatch({
      type: DELETE_PARAMETER_MODEL,
      data: id
    })

    dispatch(setAlert('ParameterModel Removed', 'success'))
  } catch (err) {
    dispatch({
      type: ERROR_PARAMETER_MODEL,
      data: { msg: err.response.statusText, status: err.response.status }
    })
  }
}