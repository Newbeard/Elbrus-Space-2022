import { combineReducers } from 'redux'
import { userReducer } from './user.reducer'
import { sessionReducer } from './session.reducer'
import { studentsReducer } from './students.reducer'
import { cityReducer } from './city.reducer'
import { countriesReducer } from './country.reducer'

export const rootReducer = combineReducers({
  user: userReducer,
  session: sessionReducer,
  students: studentsReducer,
  city: cityReducer,
  countries: countriesReducer,
})
