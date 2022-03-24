import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react'

function NavbarAuthorization(props) {

  const [loginIsActive, setLoginIsActive] = useState(true)
  const [registrIsActive, setRegistrIsActive] = useState(false)
   
  function isLog(params) {
    setLoginIsActive(true)
    setRegistrIsActive(false)
  }
  function isReg(params) {
    setLoginIsActive(false)
    setRegistrIsActive(true)
  }
  return (
       <div className='nav-login-registration'>
        <div onClick={() => isLog()} className={loginIsActive ? `link-nav--active` : `link-nav`} >
          <Link to="/login"  className='link'>
            <h3 className="h3-link">Вход</h3>
          </Link>
        </div>
        <div onClick={() => isReg()} className={registrIsActive ? `link-nav--active` : `link-nav`}>
          <Link to="/registration" className='link'>
            <h3 className='h3-link'>Регистрация</h3>
          </Link>
        </div>
      </div>
  );
}

export default NavbarAuthorization;
