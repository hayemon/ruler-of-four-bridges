import axios from 'axios'
import { setAlert } from './alert'
import {
  ADD_SKILL,
  GET_SKILLS,
  GET_SKILL,
  UPDATE_SKILL,
  DELETE_SKILL,
  ERROR_SKILL
} from './types'

// POST
export const addSkill = formData => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  try {
    const res = await axios.post('/api/skills', formData, config)

    dispatch({
      type: ADD_SKILL,
      data: res.data
    })

    dispatch(setAlert('Skill Created', 'success'))
  } catch (err) {
    dispatch({
      type: ERROR_SKILL,
      data: { msg: err.response.statusText, status: err.response.status }
    })
  }
}

// GET LIST
export const getSkills = () => async dispatch => {
  try {
    const res = await axios.get('/api/skills')

    dispatch({
      type: GET_SKILLS,
      data: res.data
    })
  } catch (err) {
    dispatch({
      type: ERROR_SKILL,
      data: { msg: err.response.statusText, status: err.response.status }
    })
  }
}

// GET SINGLE
export const getSkill = id => async dispatch => {
  try {
    if (id == 0) {
      dispatch({
        type: GET_SKILL,
        data: {}
      })
    }
    else {
      const res = await axios.get(`/api/skills/${id}`)

      dispatch({
        type: GET_SKILL,
        data: res.data
      })
    }
  } catch (err) {
    dispatch({
      type: ERROR_SKILL,
      data: { msg: err.response.statusText, status: err.response.status }
    })
  }
}

// PUT
export const updateSkill = formData => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  try {
    const res = await axios.put(`/api/skills/${formData._id}`, formData, config)

    dispatch({
      type: UPDATE_SKILL,
      data: res.data
    })

    dispatch(setAlert('Skill Updated', 'success'))
  } catch (err) {
    dispatch({
      type: ERROR_SKILL,
      data: { msg: err.response.statusText, status: err.response.status }
    })
  }
}

// DELETE
export const deleteSkill = id => async dispatch => {
  try {
    await axios.delete(`/api/skills/${id}`)

    dispatch({
      type: DELETE_SKILL,
      data: id
    })

    dispatch(setAlert('Skill Removed', 'success'))
  } catch (err) {
    dispatch({
      type: ERROR_SKILL,
      data: { msg: err.response.statusText, status: err.response.status }
    })
  }
}