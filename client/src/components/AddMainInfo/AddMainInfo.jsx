import React from 'react';

function AddMainInfo() {

  function addInfo(event) {
    event.preventDefault()
    const form = event.target;
    const dataForm = Object.fromEntries(new FormData(form));
    console.log(dataForm);
    // dispatch(filterStudentsFromServer(dataForm))
  }
  return (
    <div className='top'>
      <form onSubmit={addInfo}>
        <div>Расскажите о себе</div>
        <div>*Обязательные поля для заполнения</div>
        <input type="text" name="name" placeholder="Имя" required></input>
        <input type="text" name="surName" placeholder="Фамилия"></input>
        <div>Откуда ты родом</div>
        <input type="text" name="countryName" placeholder="Страна" required></input>
        <input type="text" name="cityName" placeholder="Город" required></input>
        <select >
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
