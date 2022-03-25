import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userLogout } from '../../redux/actions/auth';
import { useNavigate } from 'react-router-dom';
import './css/startpage.css'


function StartPage(props) {

  return (
    <div className='main-block'>


      <div className='links-111'>
        <div className='button-block-111'>
          <Link className='button-auth' to="/login">Войти</Link>
          <Link className='button-auth' to="/registration">Зарегистрироваться</Link>
        </div>
      </div>
    </div>
  );
}

export default StartPage;
