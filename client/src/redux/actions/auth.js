import { REGISTRATION, LOGIN, LOGOUT,  IS_LOADING, IS_ERROR, } from '../types'
import axios from 'axios';
axios.defaults.withCredentials = true;

export const isLoading = (data) => ({
  type: IS_LOADING,
})

export const isError = (data) => ({
  type: IS_ERROR,
  payload: data

})
export const registration = (data) => ({
  type: REGISTRATION,
  payload: data
})

export const userRegistration = (payload) => async (dispatch) => { 
  dispatch(isLoading())
  try {
    const { data } = await axios.post('/registration', payload )
    if(data.error){
      dispatch(isError(data))
    }
    else{
    dispatch(registration(data))
    localStorage.setItem('id', data.id)
    }
  } catch (err) {
    console.log(err);
  }
}


export const login = (data) => ({
  type: LOGIN,
  payload: data
})

export const userLogin = (payload) => async (dispatch) => { 
  dispatch(isLoading())
  try {
    const { data } = await axios.post('/login', payload)
    if(data.error){
      dispatch(isError(data))
    }
    else{
    dispatch(login(data))
    localStorage.setItem('id', data.id)
  }
  } catch (err) {
    console.log(err);
  }
}

export const logout = (data) => ({
  type: LOGOUT,
})

export const userLogout = (payload) => async (dispatch) => { 
  try {
    await axios('/logout')
    localStorage.removeItem('id')
    dispatch(logout())
  }
   catch (err) {
    console.log(err);
  }
}




