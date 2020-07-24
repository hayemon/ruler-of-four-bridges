import {
  ADD_DICTIONARY,
  GET_DICTIONARIES,
  GET_DICTIONARY,
  UPDATE_DICTIONARY,
  DELETE_DICTIONARY,
  ERROR_DICTIONARY
} from '../actions/types'

const initialState = {
  dictionaries: [],
  dictionary: null,
  loading: true,
  error: {}
}

export default function (state = initialState, action) {
  const { type, data } = action

  switch (type) {
    case ADD_DICTIONARY:
      return {
        ...state,
        dictionaries: [data, ...state.dictionaries],
        loading: false
      }
    case GET_DICTIONARIES:
      return {
        ...state,
        dictionaries: data,
        loading: false
      }
    case GET_DICTIONARY:
      return {
        ...state,
        dictionary: data,
        loading: false
      }
    case UPDATE_DICTIONARY:
      return {
        ...state,
        dictionaries: state.dictionaries.map(
          dictionaryItem =>
            dictionaryItem._id == data._id ?
              data :
              dictionaryItem
        ),
        loading: false
      }
    case DELETE_DICTIONARY:
      return {
        ...state,
        dictionaries: state.dictionaries.filter(dictionary => dictionary._id !== data),
        loading: false
      }
    case ERROR_DICTIONARY:
      return {
        ...state,
        error: data,
        loading: false
      }
    default:
      return state
  }
}
