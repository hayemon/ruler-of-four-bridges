import {
  ADD_SKILL,
  GET_SKILLS,
  GET_SKILL,
  UPDATE_SKILL,
  DELETE_SKILL,
  ERROR_SKILL
} from '../actions/types'

const initialState = {
  skills: [],
  skill: null,
  loading: true,
  error: {}
}

export default function (state = initialState, action) {
  const { type, data } = action

  switch (type) {
    case ADD_SKILL:
      return {
        ...state,
        skills: [data, ...state.skills],
        loading: false
      }
    case GET_SKILLS:
      return {
        ...state,
        skills: data,
        loading: false
      }
    case GET_SKILL:
      return {
        ...state,
        skill: data,
        loading: false
      }
    case UPDATE_SKILL:
      return {
        ...state,
        skills: [data, ...state.skills],
        loading: false
      }
    case DELETE_SKILL:
      return {
        ...state,
        skills: state.skills.filter(skill => skill._id !== data),
        loading: false
      }
    case ERROR_SKILL:
      return {
        ...state,
        error: data,
        loading: false
      }
    default:
      return state
  }
}
