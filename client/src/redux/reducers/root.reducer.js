import { combineReducers } from 'redux'
import { userReducer } from './user.reducer'
import { sessionReducer } from './session.reducer'

export const rootReducer = combineReducers({
  user: userReducer,
  session: sessionReducer
})
