import { REGISTRATION, LOGIN, LOGOUT, INIT_USER, REGISTRATION_ERROR, LOGIN_ERROR, IS_LOADING} from '../types'

export function userReducer(state = {}, action) {
  const { type, payload } = action

  switch (type) {
    case IS_LOADING: {
      return {
        values: {},
        error: null,
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

    case REGISTRATION_ERROR: {
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

    case LOGIN_ERROR: {
      return {
        values: {},
        error: payload,
        isLoading: false
      }
    }
    
    case LOGOUT: {
      return {}
    }
    case INIT_USER: {
      return payload 
    }

    default: {
      return state
    }
  }

}
