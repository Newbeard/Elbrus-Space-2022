import React from 'react';

function AddMainInfo() {
  return (
    <div>
      <form>
        <div>Расскажите о себе</div>
        <div>*Обязательные поля для заполнения</div>
        <input type="text" placeholder="Имя"></input>
        <input type="text" placeholder="Фамилия"></input>
        <input type="text" placeholder="Откуда ты родом"></input>
        <select required>
            <option value="" disabled selected>Кампус</option>
            <option>Санкт-Петербург</option>
            <option>Москва</option>
            <option>Онлайн</option>
        </select>
        <button>Далее</button>

      </form>
    </div>
  );
}

export default AddMainInfo;
