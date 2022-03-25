import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const months = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
];
const years = ['2020', '2021', '2022'];
const campuses = ['Москва', 'Санкт-Петербург', 'Онлайн'];

function AddMoreInfo() {
  const navigate = useNavigate()
  const [inputedData, setInputedData] = useState('');
  const [countrySelected, setCountrySelected] = useState('');

  useEffect(() => {
    const telegram = localStorage.getItem('telegram')
    const Github = localStorage.getItem('Github')
    const currentCountryName = localStorage.getItem('currentCountryName')
    const currentCityName = localStorage.getItem('currentCityName')
    const dateOfBirth = localStorage.getItem('dateOfBirth')
    const yearFinishDate = localStorage.getItem('yearFinishDate')
    const monthFinishDate = localStorage.getItem('monthFinishDate')
    const campusName = localStorage.getItem('campusName')

    setInputedData({
      telegram,
      Github,
      currentCountryName,
      currentCityName,
      dateOfBirth,
      yearFinishDate,
      monthFinishDate,
      campusName,
    })
  }, [])

  async function addInfo(event) {
    event.preventDefault()
    const form = event.target;
    const dataForm2 = Object.fromEntries(new FormData(form));
    const id = localStorage.getItem('id')
    const dataForm1 = JSON.parse(localStorage.getItem('addedInfo'))
    const dataForm = { ...dataForm1, ...dataForm2 }
    axios.post('/info', { dataForm, id })
    const arrayStorages = [
      'addedInfo',
      'telegram',
      'Github',
      'currentCountryName',
      'currentCityName',
      'dateOfBirth',
      'yearFinishDate',
      'monthFinishDate',
      'campusName',
    ]
    arrayStorages.map((item) => localStorage.removeItem(item))
    navigate('/home')
  }

  function selectedСountry(event) {
    localStorage.setItem('currentCountryName', (event.target.value))
    setCountrySelected(true);
  }

  return (
    <div className='login-form'>
      <form onSubmit={addInfo}>
        <div className='label label-first'>О себе</div>
        <input defaultValue={inputedData?.dateOfBirth} onChange={(e) => localStorage.setItem('dateOfBirth', (e.target.value))} type="date" id="start" name="dateOfBirth"
          min="1950-01-01" max="2007-12-31" autoComplete="off" />
        <input defaultValue={inputedData?.currentCountryName} onChange={(e) => selectedСountry(e)} type="text" name="currentCountryName" placeholder="Страна" autoComplete="off"></input>
        {countrySelected === true ? 
        (<input defaultValue={inputedData?.currentCityName} onChange={(e) => localStorage.setItem('currentCityName', (e.target.value))} type="text" name="currentCityName" placeholder="Город" autoComplete="off"></input>)
        : (<input disabled defaultValue={inputedData?.currentCityName} onChange={(e) => localStorage.setItem('currentCityName', (e.target.value))} type="text" name="currentCityName" placeholder="Город" autoComplete="off"></input>)}
        <p className='post-scriptum-about'>Дата рождения и ваше текущее место проживания. </p>
        <div className='label'>Контакты</div>
        <div className='input-with-icon-box'>
          <input defaultValue={inputedData?.telegram} onChange={(e) => localStorage.setItem('telegram', (e.target.value))} type="text" name="telegram" placeholder="Telegram" autoComplete="off"></input>
          <img className='img-telegram' src="/icon/telegram.png" width={20} alt="" />
        </div>
        <div className='input-with-icon-box'>
          <input defaultValue={inputedData?.Github} onChange={(e) => localStorage.setItem('Github', (e.target.value))} type="text" name="github" placeholder="Github" autoComplete="off"></input>
          <img className='img-github' src="/icon/github.png" width={20} alt="" />
        </div>
        <div className='label'>Обучение</div>
        <select onChange={(e) => localStorage.setItem('yearFinishDate', (e.target.value))} name="yearFinishDate" >
          {!inputedData.yearFinishDate && <option disabled selected>Год</option>}
          {years.map((el, i) => (<option key={i} selected={inputedData?.yearFinishDate === el}>{el}</option>))}
        </select>
        <select onChange={(e) => localStorage.setItem('monthFinishDate', (e.target.value))} name="monthFinishDate" >
          {!inputedData.monthFinishDate && <option disabled selected>Месяц</option>}
          {months.map((el, i) => (<option key={i} selected={inputedData?.monthFinishDate === el}>{el}</option>))}
        </select>
        <select onChange={(e) => localStorage.setItem('campusName', (e.target.value))} defaultValue={inputedData?.campusName} name="campusName" >
          {!inputedData.campusName && <option disabled selected>Кампус</option>}
          {campuses.map(el => (<option selected={inputedData?.campusName === el}>{el}</option>))}
        </select>
        <p className='post-scriptum-about'>Город и дата окончания вашего обучения.</p>
        <div className='button-block'>
        <button type="button" className="login-form-button" onClick={() => navigate('/info')}>Назад</button>
        <button type="submit" className="login-form-button">Сохранить</button>
        </div>
      </form>
    </div>
  );
}

export default AddMoreInfo;
