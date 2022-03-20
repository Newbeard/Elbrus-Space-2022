import { combineReducers } from 'redux'
import { userReducer } from './user.reducer'
import { studentsReducer } from './students.reducer'
import { cityReducer } from './city.reducer'
import { countriesReducer } from './country.reducer'
import {userProfileReducer } from './userProfile.reducer'

export const rootReducer = combineReducers({
  user: userReducer,
  students: studentsReducer,
  city: cityReducer,
  countries: countriesReducer,
  profile: userProfileReducer,
})
