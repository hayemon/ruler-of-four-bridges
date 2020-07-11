import {
  ADD_TEMPLATE,
  GET_TEMPLATES,
  GET_TEMPLATE,
  UPDATE_TEMPLATE,
  DELETE_TEMPLATE,
  ERROR_TEMPLATE
} from '../actions/types'

const initialState = {
  templates: [],
  template: null,
  loading: true,
  error: {}
}

export default function (state = initialState, action) {
  const { type, data } = action

  switch (type) {
    case ADD_TEMPLATE:
      return {
        ...state,
        templates: [data, ...state.templates],
        loading: false
      }
    case GET_TEMPLATES:
      return {
        ...state,
        templates: data,
        loading: false
      }
    case GET_TEMPLATE:
      return {
        ...state,
        template: data,
        loading: false
      }
    case UPDATE_TEMPLATE:
      return {
        ...state,
        templates: [data, ...state.templates],
        loading: false
      }
    case DELETE_TEMPLATE:
      return {
        ...state,
        templates: state.templates.filter(template = template._id !== data),
        loading: false
      }
    case ERROR_TEMPLATE:
      return {
        ...state,
        error: data,
        loading: false
      }
    default:
      return state
  }
}
