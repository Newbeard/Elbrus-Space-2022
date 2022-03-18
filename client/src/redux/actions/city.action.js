import { GET_CITY } from "../types";
import axios from 'axios';
axios.defaults.withCredentials = true;

export const getCities = (city)=> {
return {
  type: GET_CITY,
  payload: city
}
}
export const getCity = (payload) => async (dispatch) => { 
  try {
    const { city } = await axios.get('/cities')
    console.log(city);

    dispatch(getCities(city))

  } catch (err) {
    console.log(err);
  }
}
export const yandexDecoder = async (payload) => {
try {
 const getCity = await axios.get(`https://geocode-maps.yandex.ru/1.x/?format=json&apikey=fa906837-e249-4c18-99ac-fb6aff0bc767&geocode=${payload}`)
 console.log(getCity)
}catch (err) {
  console.log(err);
}
}
