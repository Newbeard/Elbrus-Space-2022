import { REGISTRATION, LOGIN, LOGOUT, IS_ERROR, IS_LOADING} from '../types'

export function userReducer(state = {}, action) {
  const { type, payload } = action

  switch (type) {
    case IS_LOADING: {
      return {
        values: {},
        error: payload,
        isLoading: true
      }
    } 

    case REGISTRATION: {
      return {
        values: payload,
        error: null,
        isLoading: false
      }
    }

    case IS_ERROR: {
      return {
        values: {},
        error: payload,
        isLoading: false
      }
    }

    case LOGIN: {
      return {
        values: payload,
        error: null,
        isLoading: false
      }
    }
    
    case LOGOUT: {
      return {
        values: {},
        error: null,
        isLoading: false
      }
    }
    default: {
      return state
    }
  }

}
