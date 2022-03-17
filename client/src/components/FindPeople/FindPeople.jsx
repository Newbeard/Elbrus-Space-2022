import React, { useState } from 'react';
import styles from './style.module.css'

function FindPeople() {

 const [isShowFilter, setIsShowFilter] = useState(false)

  function showFilter() {
    setIsShowFilter(!isShowFilter)
  }

  return (
    <div>
      <button onClick={showFilter}>Фильтр</button>
      <input type="text" name="name" id="name" placeholder="Поиск" />
      {isShowFilter === true ?
      <form method="post" action="#">
        <div class="row">
          <select name="country" required>
            <option value="" disabled selected>Страна</option>
            <option>Любая</option>
            <option>Россия</option>
            <option>Грузия</option>
          </select>
          <select name="town" required>
            <option value="" disabled selected>Город</option>
            <option>Любая</option>
            <option>Москва</option>
            <option>Батуми</option>
          </select>
          <select name="campus" required>
            <option value="" disabled selected>Кампус</option>
            <option>Любой</option>
            <option>Москва</option>
            <option>Санкт-Петербург</option>
            <option>Онлайн</option>
          </select>
          <select name="year" required>
            <option value="" disabled selected>Год окончания</option>
            <option>За всё время</option>
            <option>2022</option>
            <option>2021</option>
          </select>
          <select name="month" required>
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
          <div class="col-12">
            <ul class="actions">
              <li><input type="submit" value="Показать" /></li>
              <li><input type="reset" value="Очистить фильтр" class="alt" /></li>
            </ul>
          </div>
        </div>
      </form>
      : <div></div>}
      <div>
        <p className={styles.background}>Вася</p>
        <p>Вася</p>
        <p>Вася</p>
        <p>Вася</p>
      </div>

    </div>
  );
}

export default FindPeople;
