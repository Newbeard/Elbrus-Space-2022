import { initProfileFromServer, editProfileFromServer } from '../../redux/actions/userProfile.action';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import './EditProfile.css';
import { userLogout } from '../../redux/actions/auth';

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
const years = ['2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025', '2026'];
const сampus = ['Москва', 'Санкт-Петербург', 'Онлайн'];

function EditProfile(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.profile);
  const [countrySelected, setCountrySelected] = useState('');

  const hendlerClick = (event) => {
    event.preventDefault()
    dispatch(userLogout())
    navigate('/')
  }

  useEffect(() => {
    dispatch(initProfileFromServer());
  }, []);

  function hendleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const data = Object.fromEntries(new FormData(form));
    dispatch(editProfileFromServer(data))
  }


  return (
    <div >
      {user && (
        <div className='login-form'>
          <form onSubmit={hendleSubmit}>
            <div className='label label-first'>О себе</div>
            <input
              type="text"
              name="name"
              placeholder="Имя"
              defaultValue={user.name}
              autoComplete="off"
            />
            <input
              type="text"
              name="surName"
              placeholder="Фамилия"
              defaultValue={user.surName}
              autoComplete="off"
            />
            <input
              type="date"
              name="dateOfBirth"
              min="1950-01-01"
              max="2007-12-31"
              defaultValue={user.dateOfBirth}
              autoComplete="off"
            />
            <input
              onChange={() => setCountrySelected(true)}
              className='input-edit-profile'
              type="text"
              name="currentCountryName"
              placeholder="Страна"
              defaultValue={user['currentCou.countryName']}
              autoComplete="off"
            />
            {(countrySelected === true) && (user['currentCit.cityName'] !== '') ? <input
              type="text"
              name="currentCityName"
              placeholder="Город"
              defaultValue={user['currentCit.cityName']}
              autoComplete="off"
            />
            : <input
              disabled
              type="text"
              name="currentCityName"
              placeholder="Город"
              defaultValue={user['currentCit.cityName']}
              autoComplete="off"
            />}
            <div className='label'>Контакты</div>
            <div className='input-with-icon-box'>
              <input
                type="text"
                name="telegram"
                defaultValue={user.telegram}
                placeholder="Telegram"
                autoComplete="off"
              />
              <img className='img-telegram' src="/icon/telegram.png" width={20} alt="" />
            </div>
            <div className='input-with-icon-box'>
              <input
                type="text"
                name="github"
                defaultValue={user.github}
                placeholder="GitHub"
                autoComplete="off"
              />
              <img className='img-github' src="/icon/github.png" width={20} alt="" />
            </div>
            <div className='label'>Обучение</div>
            <select name="campusName" >
              {!user['Campus.campusName'] && <option disabled selected>Кампус</option>}
              {сampus.map((el, i) => (<option key={i} selected={!user['Campus.campusName'] === el}>{el}</option>))}
            </select>

            <select name="yearFinishDate" >
              {!user.yearFinishDate && <option disabled selected>Год</option>}
              {years.map((el, i) => (<option key={i} selected={user?.yearFinishDate === el}>{el}</option>))}
            </select>
            <select name="monthFinishDate" >
              {!user.monthFinishDate && <option disabled selected>Месяц</option>}
              {months.map((el, i) => (<option key={i} selected={user?.monthFinishDate === el}>{el}</option>))}
            </select>
            <div className='label'>Откуда ты родом </div>
            <input defaultValue={user['Country.countryName']} type="text" name="countryName" placeholder="Страна" autoComplete="off" required></input>
            <input defaultValue={user['City.cityName']} type="text" name="cityName" placeholder="Город" autoComplete="off" required></input>
            <button className='registration-form-button' type="submit">Сохранить</button>
          </form>
          <div className='div-logout-button'>
            <Link to="/logout"><button className='logout-button' onClick={hendlerClick} type="button">Выйти</button></Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default EditProfile;
