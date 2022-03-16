import { REGISTRATION, LOGIN, LOGOUT, INIT_USER} from '../types'

export function userReducer(state = {}, action) {
  const { type, payload } = action

  switch (type) {
    case REGISTRATION: {
      return payload 
    }

    case LOGIN: {
      
      return payload 
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
