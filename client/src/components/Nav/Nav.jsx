import { Link } from 'react-router-dom';
import styles from './style.module.css'

export default function Nav() {

  return (
    <div>
      {/* <Link /> */}
      <nav id="nav">
        <ul className="container">
          <li><Link to="/">Главная</Link></li>
          <li><Link to="/search">Поиск</Link></li>
          <li><Link to="/profile">Мой профиль</Link></li>
          <li><Link to="/logout">Выйти</Link></li>
        </ul>
      </nav>
    </div>
  );
}
