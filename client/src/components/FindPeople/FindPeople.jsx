import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCity, getCitiesOfSelectedCountryFromServer } from '../../redux/actions/city.action';
import { initCountriesFromServer } from '../../redux/actions/country.action';
import { filterStudentsFromServer, initStudentsFromServer } from '../../redux/actions/students.action';
import { Link } from 'react-router-dom';
import './FindPeople.css'

function FindPeople() {

  const dispatch = useDispatch();
  const { students, city, countries } = useSelector(state => state);
  const [isShowFilter, setIsShowFilter] = useState(false);
  const [countrySelected, setCountrySelected] = useState('');

  useEffect(() => {
    dispatch(initStudentsFromServer())
    dispatch(initCountriesFromServer())
    dispatch(getCity())
  }, [])

  function showFilter() {
    setIsShowFilter(!isShowFilter)
  }

  function filterStudents(event) {
    event.preventDefault()
    const form = event.target;
    const dataForm = Object.fromEntries(new FormData(form));
    dispatch(filterStudentsFromServer(dataForm))
  }

  function resetFilterStudents() {
    dispatch(filterStudentsFromServer({}))
    setIsShowFilter(!isShowFilter)
    setCountrySelected('');
  }

  function selectedСountry(event) {
    setCountrySelected(event.target.value);
    dispatch(getCitiesOfSelectedCountryFromServer({ countryName: event.target.value }))
  }
  return (
    <div className=''>
      <button onClick={showFilter}>Фильтр</button>
      <div className='input-with-icon-box'>
        <input className='input-search' type="text" name="name" id="name" placeholder="Поиск" />
        <button onClick={showFilter}>
          <svg width="25" height="25" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5935 23.4375C19.0301 23.4375 23.4373 19.0303 23.4373 13.5938C23.4373 8.1572 19.0301 3.75 13.5935 3.75C8.15695 3.75 3.74976 8.1572 3.74976 13.5938C3.74976 19.0303 8.15695 23.4375 13.5935 23.4375Z" stroke="#D1D1D1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M20.5537 20.5547L26.2491 26.2501" stroke="#D1D1D1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
      {isShowFilter === true ?
        <div className='search-form'>
          <form method="post" onSubmit={filterStudents} action="#">
            <select onChange={(event) => selectedСountry(event)} name="countryName" >
              <option value="" disabled selected>Страна</option>
              <option>Любая</option>
              {countries.map((country) => <option key={country.id}>{country.countryName}</option>)}
            </select>
            {countrySelected === "" ?
              <select disabled name="cityName" >
                <option value="" disabled selected>Город</option>
                <option>Любая</option>
                {city?.map((city) => <option key={city.id}>{city.cityName}</option>)}
              </select> :
              <select name="cityName" >
                <option value="" disabled selected>Город</option>
                <option>Любая</option>
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
              <option>2022</option>
              <option>2021</option>
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
            <input type="submit" value="Показать" />
          </form>
          <button onClick={resetFilterStudents}>Очистить фильтр</button>
        </div>
        : <div></div>}
      <div className='cards-students'>
        {students && students.map((student) => <div className='card-student' key={student.id}><Link to={`/student/${student.id}`} style={{ textDecoration: 'none' }}>{student.name} {student.surName}</Link></div>)}
      </div>
    </div>
  );
}

export default FindPeople;
