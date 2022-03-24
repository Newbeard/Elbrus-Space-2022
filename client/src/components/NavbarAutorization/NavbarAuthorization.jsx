import React from 'react';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react'

function NavbarAuthorization(props) {

  return (
    <div className='nav-login-registration'>
      <NavLink to="/login" className='link-nav link'>
          <h3 className="h3-link">Вход</h3>
      </NavLink>
      <NavLink to="/registration" className='link-nav link'>
          <h3 className='h3-link'>Регистрация</h3>
      </NavLink>
    </div>
  );
}

export default NavbarAuthorization;
