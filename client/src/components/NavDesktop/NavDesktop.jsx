import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userLogout } from '../../redux/actions/auth';
import { useNavigate } from 'react-router-dom';

export default function NavDesktop() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const hendlerClick = (event) => {
    event.preventDefault()
      dispatch(userLogout())
    navigate('/')
  }

  return (
    <div>
      <nav id="nav">
        <ul className="container">
          <li><Link to="/">Главная</Link></li>
          <li><Link to="/search">Поиск</Link></li>
          <li><Link to="/profile">Мой профиль</Link></li>
          <li><Link to="/login">Войти</Link></li>
          <li><Link to="/logout" onClick={hendlerClick}>Выйти</Link></li>
          <li><Link to="/registration">Регистрация</Link></li>
          <li><Link to="/info">Добавление инфо</Link></li>
          <li><Link to="/moreInfo">Доп. инфо</Link></li>
        </ul>
      </nav>
    </div>
  );
}
