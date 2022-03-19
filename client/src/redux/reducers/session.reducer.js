import { INIT_USER, CHANGE_SESSION } from '../types'

export function sessionReducer(state = {}, action) {
  const { type, payload } = action

  switch (type) {
  
    case INIT_USER: {
      return payload 
    }
    
    case CHANGE_SESSION: {
      return false
    }


    default: {
      return state
    }
  }

}
