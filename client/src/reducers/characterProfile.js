import {
  ADD_CHARACTER_PROFILE,
  GET_CHARACTER_PROFILES,
  GET_CHARACTER_PROFILE,
  UPDATE_CHARACTER_PROFILE,
  DELETE_CHARACTER_PROFILE,
  ERROR_CHARACTER_PROFILE
} from '../actions/types'

const initialState = {
  characterProfiles: [],
  characterProfile: null,
  loading: true,
  error: {}
}

export default function (state = initialState, action) {
  const { type, data } = action

  switch (type) {
    case ADD_CHARACTER_PROFILE:
      return {
        ...state,
        characterProfiles: [data, ...state.characterProfiles],
        loading: false
      }
    case GET_CHARACTER_PROFILES:
      return {
        ...state,
        characterProfiles: data,
        loading: false
      }
    case GET_CHARACTER_PROFILE:
      return {
        ...state,
        characterProfile: data,
        loading: false
      }
    case UPDATE_CHARACTER_PROFILE:
      return {
        ...state,
        characterProfiles: [data, ...state.characterProfiles],
        loading: false
      }
    case DELETE_CHARACTER_PROFILE:
      return {
        ...state,
        characterProfiles: state.characterProfiles.filter(characterProfile = characterProfile._id !== data),
        loading: false
      }
    case ERROR_CHARACTER_PROFILE:
      return {
        ...state,
        error: data,
        loading: false
      }
    default:
      return state
  }
}
