import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCitiesOfSelectedCountryFromServer } from '../../redux/actions/city.action';
import { filterStudentsFromServer } from '../../redux/actions/students.action';
import './FilterModal.css'

function FilterModal({ city, countries, closedFilterStudents }) {
  const dispatch = useDispatch();
  const [countrySelected, setCountrySelected] = useState('');

  function selectedСountry(event) {
    setCountrySelected(event.target.value);
    dispatch(getCitiesOfSelectedCountryFromServer({ countryName: event.target.value }))
  }

  function filterStudents(event) {
    event.preventDefault()
    const form = event.target;
    const dataForm = Object.fromEntries(new FormData(form));
     dispatch(filterStudentsFromServer(dataForm))
  }

  return (
    <div className='fullWidth'>
      <div className='filter-form'>
          <form method="post" onSubmit={filterStudents} action="#">
            <select onChange={(event) => selectedСountry(event)} name="countryName" >
              <option value="" disabled selected>Страна</option>
              <option>Любая</option>
              {countries.map((country) => <option key={country.id}>{country.countryName}</option>)}
            </select>
            {countrySelected === "" ?
              <select disabled name="cityName" >
                <option value="" disabled selected>Город</option>
                <option>Любой</option>
                {city?.map((city) => <option key={city.id}>{city.cityName}</option>)}
              </select> :
              <select name="cityName" >
                <option value="" disabled selected>Город</option>
                <option>Любой</option>
                {city?.map((city) => <option key={city.id}>{city.cityName}</option>)}
              </select>}
            <select name="campusName" >
              <option value="" disabled selected>Кампус</option>
              <option>Любой</option>
              <option>Москва</option>
              <option>Санкт-Петербург</option>
              <option>Онлайн</option>
            </select>
            <select name="yearFinishDate" >
              <option value="" disabled selected>Год окончания</option>
              <option>За всё время</option>
              <option>2018</option>
              <option>2019</option>
              <option>2020</option>
              <option>2021</option>
              <option>2022</option>
            </select>
            <select name="monthFinishDate" >
              <option value="" disabled selected>Месяц окончания</option>
              <option>За всё время</option>
              <option>Январь</option>
              <option>Февраль</option>
              <option>Март</option>
              <option>Апрель</option>
              <option>Май</option>
              <option>Июнь</option>
              <option>Июль</option>
              <option>Август</option>
              <option>Сентябрь</option>
              <option>Октябрь</option>
              <option>Ноябрь</option>
              <option>Декабрь</option>
            </select>
            <input className='login-form-button' type="submit" value="Показать" />
          </form>
          <button className='login-form-button' onClick={closedFilterStudents}>Очистить фильтр</button>
        </div>
    </div>
  );
}

export default FilterModal;
