import { Link } from 'react-router-dom';
import { useDispatch, useSelector  } from 'react-redux';
import { userLogout } from '../../redux/actions/auth';
import { useNavigate } from 'react-router-dom';



export default function NavDesktop() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { values } = useSelector( state => state.user)


  const hendlerClick = (event) => {
    event.preventDefault()
      dispatch(userLogout())
    navigate('/')
  }

  return (
    <div>
      <nav id="nav">
        <ul className="container">
         {!values.id ?<>
          <li><Link to="/login">Войти</Link></li>
          <li><Link to="/registration">Регистрация</Link></li>
          </>:
          <>
          <li><Link to="/">Главная</Link></li>
          <li><Link to="/profile">Мой профиль</Link></li>
          <li><Link to="/search">Поиск</Link></li>
          <li><Link to="/info">addInfo</Link></li>
          <li><Link to="/moreinfo">addMoreInfo</Link></li>
          <li><Link to="/student">student</Link></li>
          <li><Link to="/logout" onClick={hendlerClick}>Выйти</Link></li>
          </>}
        </ul>
      </nav>
    </div>
  );
}
