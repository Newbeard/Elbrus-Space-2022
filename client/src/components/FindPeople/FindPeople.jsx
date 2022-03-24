import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCity } from '../../redux/actions/city.action';
import { initCountriesFromServer } from '../../redux/actions/country.action';
import { filterStudentsFromServer, initStudentsFromServer, searchStudents } from '../../redux/actions/students.action';
import { Link } from 'react-router-dom';
import './FindPeople.css'
import FilterModal from '../FilterModal/FilterModal';

function FindPeople() {

  const dispatch = useDispatch();
  const { students, city, countries } = useSelector(state => state);
  const [isShowFilter, setIsShowFilter] = useState(false);
  const [countrySelected, setCountrySelected] = useState('');
  const [nameStudent, setNameStudent] = useState('')

  useEffect(() => {
    // dispatch(initStudentsFromServer())
    dispatch(initCountriesFromServer())
    dispatch(getCity())
    console.log(nameStudent);
  }, [nameStudent])

  function showFilter() {
    setIsShowFilter(!isShowFilter)
  }

  function closedFilterStudents() {
    dispatch(filterStudentsFromServer({}))
    setIsShowFilter(!isShowFilter)
    setCountrySelected('');
  }

  return (
    <div className='container-find'>
      <div className='container-search'>
        {/* <button onClick={showFilter}>Фильтр</button> */}
        <div className='input-with-icon-box-find'>
          <input className='input-search' onChange={(e) => dispatch(searchStudents(e.target.value))} type="text" name="name" id="name" placeholder="Поиск" autoComplete="off" />
          <svg onClick={showFilter} width="25" height="25" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5935 23.4375C19.0301 23.4375 23.4373 19.0303 23.4373 13.5938C23.4373 8.1572 19.0301 3.75 13.5935 3.75C8.15695 3.75 3.74976 8.1572 3.74976 13.5938C3.74976 19.0303 8.15695 23.4375 13.5935 23.4375Z" stroke="#D1D1D1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M20.5537 20.5547L26.2491 26.2501" stroke="#D1D1D1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        {isShowFilter && <FilterModal city={city} countries={countries} closedFilterStudents={closedFilterStudents} />}
        <div className='cards-students'>
          {students && students?.map((student) =>
            <div className='card-student' key={student?.id}>
              <div className='foto-student'>{student?.name.split('')[0]}</div>
              <Link to={`/student/${student?.id}`} className="info-student" style={{ textDecoration: 'none' }}>
                <div className='name-student'>
                  {student?.name} {student?.surName}
                </div>
                <div className='student-city'>
                  {student?.currentCity}
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default FindPeople;
