import axios from 'axios'
import { setAlert } from './alert'
import {
  ADD_TEMPLATE,
  GET_TEMPLATES,
  GET_TEMPLATE,
  UPDATE_TEMPLATE,
  DELETE_TEMPLATE,
  ERROR_TEMPLATE
} from './types'

// POST
export const addTemplate = formData => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  try {
    const res = await axios.post('/api/templates', formData, config)

    dispatch({
      type: ADD_TEMPLATE,
      data: res.data
    })

    dispatch(setAlert('Template Created', 'success'))
  } catch (err) {
    dispatch({
      type: ERROR_TEMPLATE,
      data: { msg: err.response.statusText, status: err.response.status }
    })
  }
}

// GET LIST
export const getTemplates = () => async dispatch => {
  try {
    const res = await axios.get('/api/templates')

    dispatch({
      type: GET_TEMPLATES,
      data: res.data
    })
  } catch (err) {
    dispatch({
      type: ERROR_TEMPLATE,
      data: { msg: err.response.statusText, status: err.response.status }
    })
  }
}

// GET SINGLE
export const getTemplate = id => async dispatch => {
  try {
    if (id == 0) {
      dispatch({
        type: GET_TEMPLATE,
        data: {}
      })
    }
    else {
      const res = await axios.get(`/api/templates/${id}`)

      dispatch({
        type: GET_TEMPLATE,
        data: res.data
      })
    }
  } catch (err) {
    dispatch({
      type: ERROR_TEMPLATE,
      data: { msg: err.response.statusText, status: err.response.status }
    })
  }
}

// PUT
export const updateTemplate = formData => async dispatch => {
  console.log(formData)
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  try {
    const res = await axios.put(`/api/templates/${formData._id}`, formData, config)

    dispatch({
      type: UPDATE_TEMPLATE,
      data: res.data
    })

    dispatch(setAlert('Template Updated', 'success'))
  } catch (err) {
    dispatch({
      type: ERROR_TEMPLATE,
      data: { msg: err.response.statusText, status: err.response.status }
    })
  }
}

// DELETE
export const deleteTemplate = id => async dispatch => {
  try {
    await axios.delete(`/api/templates/${id}`)

    dispatch({
      type: DELETE_TEMPLATE,
      data: id
    })

    dispatch(setAlert('Template Removed', 'success'))
  } catch (err) {
    dispatch({
      type: ERROR_TEMPLATE,
      data: { msg: err.response.statusText, status: err.response.status }
    })
  }
}