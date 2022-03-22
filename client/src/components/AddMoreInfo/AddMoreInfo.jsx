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
const years = ['2020', '2021', '2022']

function AddMoreInfo() {
  const navigate = useNavigate()
  const [inputedData, setInputedData] = useState('');

  useEffect(() => {
    const telegram = localStorage.getItem('telegram')
    const Github = localStorage.getItem('Github')
    const currentCountryName = localStorage.getItem('currentCountryName')
    const currentCityName = localStorage.getItem('currentCityName')
    const dateOfBirth = localStorage.getItem('dateOfBirth')
    const yearFinishDate = localStorage.getItem('yearFinishDate')
    const monthFinishDate = localStorage.getItem('monthFinishDate')

    setInputedData({
      telegram,
      Github,
      currentCountryName,
      currentCityName,
      dateOfBirth,
      yearFinishDate,
      monthFinishDate,
    })
  }, [])

  async function addInfo(event) {
    event.preventDefault()
    const form = event.target;
    const dataForm2 = Object.fromEntries(new FormData(form));
    const id = localStorage.getItem('id')
    const dataForm1 = JSON.parse(localStorage.getItem('addedInfo'))
    const dataForm = { ...dataForm1, ...dataForm2 }
    console.log({ dataForm, id });
    axios.post('/info', { dataForm, id })
    axios.post('/getcoord', { dataForm, id })
    const arrayStorages = [
      'addedInfo',
      'telegram',
      'Github',
      'currentCountryName',
      'currentCityName',
      'dateOfBirth',
      'yearFinishDate',
      'monthFinishDate',
    ]
    arrayStorages.map((item) => localStorage.removeItem(item))
    navigate('/')
  }

  return (
    <div className='top'>
      <form onSubmit={addInfo}>
        <div>Расскажите о себе</div>
        <input defaultValue={inputedData?.telegram} onChange={(e) => localStorage.setItem('telegram', (e.target.value))} type="text" name="telegram" placeholder="Telegram"></input>
        <input defaultValue={inputedData?.Github} onChange={(e) => localStorage.setItem('Github', (e.target.value))} type="text" name="github" placeholder="Github"></input>
        <div>Текущее местонахождение</div>
        <input defaultValue={inputedData?.currentCountryName} onChange={(e) => localStorage.setItem('currentCountryName', (e.target.value))} type="text" name="currentCountryName" placeholder="Страна"></input>
        <input defaultValue={inputedData?.currentCityName} onChange={(e) => localStorage.setItem('currentCityName', (e.target.value))} type="text" name="currentCityName" placeholder="Город"></input>
        <div>

          <div>Дата рождения</div>

          <input defaultValue={inputedData?.dateOfBirth} onChange={(e) => localStorage.setItem('dateOfBirth', (e.target.value))} type="date" id="start" name="dateOfBirth"
            min="1950-01-01" max="2050-12-31"></input>
        </div>
        <div>Окончание обучения </div>
        <select onChange={(e) => localStorage.setItem('yearFinishDate', (e.target.value))} name="yearFinishDate" >
        {!inputedData.yearFinishDate && <option disabled selected>Год</option>}
          {years.map((el, i) => (<option key={i} selected={inputedData?.yearFinishDate === el}>{el}</option>))}
        </select>
        <select onChange={(e) => localStorage.setItem('monthFinishDate', (e.target.value))} name="monthFinishDate" >
          {!inputedData.monthFinishDate && <option disabled selected>Месяц</option>}
          {months.map((el, i) => (<option key={i} selected={inputedData?.monthFinishDate === el}>{el}</option>))}
        </select>
        <button>Сохранить</button>
      </form>
      <button onClick={() => navigate('/info')}>Назад</button>
    </div>
  );
}

export default AddMoreInfo;
