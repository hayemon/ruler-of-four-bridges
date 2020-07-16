import {
  ADD_PARAMETER_MODEL,
  GET_PARAMETER_MODELS,
  GET_PARAMETER_MODEL,
  UPDATE_PARAMETER_MODEL,
  DELETE_PARAMETER_MODEL,
  ERROR_PARAMETER_MODEL
} from '../actions/types'

const initialState = {
  parameterModels: [],
  parameterModel: null,
  loading: true,
  error: {}
}

export default function (state = initialState, action) {
  const { type, data } = action

  switch (type) {
    case ADD_PARAMETER_MODEL:
      return {
        ...state,
        parameterModels: [data, ...state.parameterModels],
        loading: false
      }
    case GET_PARAMETER_MODELS:
      return {
        ...state,
        parameterModels: data,
        loading: false
      }
    case GET_PARAMETER_MODEL:
      return {
        ...state,
        parameterModel: data,
        loading: false
      }
    case UPDATE_PARAMETER_MODEL:
      return {
        ...state,
        parameterModels: [data, ...state.parameterModels],
        loading: false
      }
    case DELETE_PARAMETER_MODEL:
      return {
        ...state,
        parameterModels: state.parameterModels.filter(parameterModel = parameterModel._id !== data),
        loading: false
      }
    case ERROR_PARAMETER_MODEL:
      return {
        ...state,
        error: data,
        loading: false
      }
    default:
      return state
  }
}
