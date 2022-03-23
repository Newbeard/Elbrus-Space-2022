import { initProfileFromServer, editProfileFromServer } from '../../redux/actions/userProfile.action';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import './EditProfile.css';

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
  const { user } = useSelector((state) => state.profile);

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

            <h3 >Место проживания</h3>
            <input
              type="text"
              name="currentCountryName"
              placeholder="Страна"
              defaultValue={user['currentCou.countryName']}
              autoComplete="off"
            />
            <input
              type="text"
              name="currentCityName"
              placeholder="Город"
              defaultValue={user['currentCit.cityName']}
              autoComplete="off"
            />
            <h3 >Контакты</h3>
            <div className='input-with-icon-box'>
              <input
                type="text"
                name="telegram"
                defaultValue={user.telegram}
                placeholder="Telegram"
                autoComplete="off"
              />
              <img src="/icon/telegram.png" width={23} alt="" />
            </div>
            <div className='input-with-icon-box'>
            <input
              type="text"
              name="github"
              defaultValue={user.github}
              placeholder="GitHub"
              autoComplete="off"
            />
              <img src="/icon/github.png" width={23} alt="" />
              </div>
            <h3 >Окончание обучения</h3>

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
            <h3 >Откуда ты родом</h3>
            <input
              type="text"
              name="countryName"
              placeholder="Страна"
              defaultValue={user['Country.countryName']}
              autoComplete="off"
            />
            <input
              type="text"
              name="cityName"
              placeholder="Город"
              defaultValue={user['City.cityName']}
              autoComplete="off"
            />
            <h3 >Дата рождения</h3>
            <input
              type="date"
              name="dateOfBirth"
              min="1950-01-01"
              max="2007-12-31"
              defaultValue={user.dateOfBirth}
              autoComplete="off"
            />

            <button className='registration-form-button' type="submit" >Отправить</button>
          </form>
          <Link to="/logout"> <button className='registration-form-button' type="click">Выйти</button></Link>
        </div>
      )}
    </div>
  );
}

export default EditProfile;
