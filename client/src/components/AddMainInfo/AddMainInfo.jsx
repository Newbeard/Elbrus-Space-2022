import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// const campuses = ['Москва', 'Санкт-Петербург', 'Онлайн'];

function AddMainInfo() {
  const navigate = useNavigate()
  const [inputedData, setInputedData] = useState('')
  useEffect(() => {
    const dataForm = JSON.parse(localStorage.getItem('addedInfo'))
    setInputedData(dataForm)
  }, [])

  async function addInfo(event) {
    event.preventDefault()
    const form = event.target;
    const dataForm = Object.fromEntries(new FormData(form));
    localStorage.setItem('addedInfo', JSON.stringify(dataForm))
    navigate('/moreInfo')
  }

  return (
    <div className='login-form'>
      <form onSubmit={addInfo}>
        <div>Заполните информацию</div>
        <input type="text" defaultValue={inputedData?.name} name="name" placeholder="Имя*" autoFocus autoComplete="off" required></input>
        <input type="text" defaultValue={inputedData?.surName} name="surName" placeholder="Фамилия" autoComplete="off"></input>
        <div>Откуда ты родом</div>
        <input type="text" defaultValue={inputedData?.countryName} name="countryName" placeholder="Страна*" autoComplete="off" required></input>
        <input type="text" defaultValue={inputedData?.cityName} name="cityName" placeholder="Город*" autoComplete="off" required></input>
        <select name="campusName" >
          {inputedData ? <option>{inputedData?.campusName}</option> : <option disabled selected>Кампус</option>}
          {inputedData?.campusName !== 'Москва' && <option>Москва</option>}
          {inputedData?.campusName !== 'Санкт-Петербург' && <option>Санкт-Петербург</option>}
          {inputedData?.campusName !== 'Онлайн' && <option>Онлайн</option>}
        </select>
        <p className='post-scriptum-necessarily'>*Обязательно для заполнения</p>
        <button className='registration-form-button'>Далее</button>
      </form>
    </div>
  );
}

export default AddMainInfo;
