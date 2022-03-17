import React from 'react';

function Registration() {
  return (
    <div>
      <form>
        <div>Регистрация</div>
        <input type="text" placeholder="Email"/>
        <input type="text" placeholder="Пароль"></input>
        <input type="text" placeholder="Повторите пароль"></input>
        <button>Зарегистрироваться</button>
      </form>
    </div>
  );
}

export default Registration;
