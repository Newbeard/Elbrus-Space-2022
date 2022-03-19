import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterStudentsFromServer, initStudentsFromServer } from '../../redux/actions/students.action';
import styles from './style.module.css'

function FindPeople() {

  const dispatch = useDispatch();
  const students = useSelector(state => state.students);
  const [isShowFilter, setIsShowFilter] = useState(false);

  useEffect(() => {
    dispatch(initStudentsFromServer())
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
  }


  return (
    <div>
      <button onClick={showFilter}>Фильтр</button>
      <input type="text" name="name" id="name" placeholder="Поиск" />
      {isShowFilter === true ?
        <div>
          <form method="post" onSubmit={filterStudents} action="#">
            <div className="row">
              <select name="countryName" >
                <option value="" disabled selected>Страна</option>
                <option>Любая</option>
                <option>Россия</option>
                <option>Грузия</option>
              </select>
              <select name="cityName" >
                <option value="" disabled selected>Город</option>
                <option>Любая</option>
                <option>Москва</option>
                <option>Батуми</option>
              </select>
              <select name="campusName" >
                <option value="" disabled selected>Кампус</option>
                <option>Любой</option>
                <option>Москва</option>
                <option>Санкт-Петербург</option>
                <option>Онлайн</option>
              </select>
              <select name="year" >
                <option value="" disabled selected>Год окончания</option>
                <option>За всё время</option>
                <option>2022</option>
                <option>2021</option>
              </select>
              <select name="month" >
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
              <div className="col-12">
                <ul className="actions">
                  <li><input type="submit" value="Показать" /></li>
                </ul>
              </div>
            </div>
          </form>
          <button onClick={resetFilterStudents}>Очистить фильтр</button>
        </div>
        : <div></div>}
      <div>
        <p className={styles.background}>Вася</p>
        {students && students.map((student) => <p key={student.id}>{student.name} {student.surName}</p>)}
      </div>

    </div>
  );
}

export default FindPeople;
