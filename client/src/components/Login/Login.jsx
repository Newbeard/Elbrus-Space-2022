import React from 'react';

export default function Login() {

  return (
    <div>
      <form>
        <div>Вход</div>
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Пароль" />
        <button >Войти</button>
        <button>Регистрация</button>
      </form>
    </div>
  );
}
