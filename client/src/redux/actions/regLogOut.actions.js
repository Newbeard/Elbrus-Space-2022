import { REGISTRATION, LOGIN, LOGOUT, INIT_USER} from '../types'

export const registration = (user) => ({
  type: REGISTRATION,
  payload: user
})

export const login = (user) => ({
  type: LOGIN,
  payload: user
})

export const logout = (user) => ({
  type: LOGOUT,
  payload: user
})

export const sessionCheck = (user) => ({
  type: INIT_USER,
  payload: user
})
