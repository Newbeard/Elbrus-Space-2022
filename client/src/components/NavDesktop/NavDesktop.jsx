import { Link } from 'react-router-dom';
import styles from './style.module.css'

export default function NavDesktop() {

  return (
    <div>
      <nav id="nav">
        <ul className="container">
          <li><Link to="/">Главная</Link></li>
          <li><Link to="/search">Поиск</Link></li>
          <li><Link to="/profile">Мой профиль</Link></li>
          <li><Link to="/login">Войти</Link></li>
          <li><Link to="/registration">Регистрация</Link></li>
          <li><Link to="/info">Добавление инфо</Link></li>
          <li><Link to="/moreInfo">Доп. инфо</Link></li>
        </ul>
      </nav>
    </div>
  );
}
