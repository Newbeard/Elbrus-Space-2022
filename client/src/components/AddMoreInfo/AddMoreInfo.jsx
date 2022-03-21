import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddMoreInfo() {
  const navigate = useNavigate()

  async function addInfo(event) {
    event.preventDefault()
    const form = event.target;
    const dataForm2 = Object.fromEntries(new FormData(form));
    const id = localStorage.getItem('id')
    const qwe = JSON.parse(localStorage.getItem('addedInfo'))
    const dataForm = {...qwe, ...dataForm2}
    console.log({dataForm, id});
    axios.post('/info', { dataForm, id })
    // navigate('/moreInfo')
  }
  function back(params) {
    navigate('/info')
  }
  return (
    <div className='top'>
      <form onSubmit={addInfo}>
        <div>Расскажите о себе</div>
        <input onChange={(e) => localStorage.setItem('telegram', JSON.stringify({ telegram: e.target.value }))} type="text" name="telegram" placeholder="Telegram"></input>
        <input type="text" name="github" placeholder="Github"></input>
        <div>Текущее местонахождение</div>
        <input type="text" name="currentCountryName" placeholder="Страна"></input>
        <input type="text" name="currentCityName" placeholder="Город"></input>
        <div>

          <div>Дата рождения</div>

          <input type="date" id="start" name="dateOfBirth"
            min="1950-01-01" max="2050-12-31"></input>
        </div>
        <div>Окончание обучения </div>
        <select name="yearFinishDate" >
          <option value="" disabled selected>Год</option>
          <option>2018</option>
          <option>2019</option>
          <option>2020</option>
          <option>2021</option>
          <option>2022</option>
          <option>2023</option>
        </select>
        <select name="monthFinishDate" >
          <option value="" disabled selected>Месяц</option>
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
        <button>Сохранить</button>
      </form>
      <button onClick={back}>Назад</button>
    </div>
  );
}

export default AddMoreInfo;
