import React from 'react';

function AddMoreInfo() {
  return (
    <div>
      <form>
        <div>Расскажите о себе</div>
        <input type="text" placeholder="Telegram"></input>
        <input type="text" placeholder="Github"></input>
        <input type="text" placeholder="Страна рождения"></input>
        <input type="text" placeholder="Город рождения"></input>
        <div>
        <label htmlFor="start">Дата рождения</label>

        <input type="date" id="start" name="year"
       value="2022-03-02"
       min="1950-01-01" max="2050-12-31"></input> 
      </div>
      <select name="year" required>
            <option value="" disabled selected>Год окончания</option>
            <option>2018</option>
            <option>2019</option>
            <option>2020</option>
            <option>2021</option>
            <option>2022</option>
            <option>2023</option>
      </select>
      <select name="month" required>
            <option value="" disabled selected>Месяц окончания</option>
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
      <button>Назад</button>
      <button>Сохранить</button>
      </form>
    </div>
  );
}

export default AddMoreInfo;
