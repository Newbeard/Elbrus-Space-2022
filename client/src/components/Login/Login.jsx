import { useDispatch } from 'react-redux';
import { userLogin } from '../../redux/actions/auth';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import Error  from '../Error/Error'
import styles from './style.module.css'


export default function Login() {
  const dispatch = useDispatch();
	const navigate = useNavigate();
  const { error, values, isLoading } = useSelector( state => state.user)

  useEffect(() => {
    if(values.id) {
      navigate('/')
    };
  }, [values])

	const handleSubmit = (event) => {
		event.preventDefault();
		const payload = {
			email: event.target.email.value,
			password: event.target.password.value,
		};

				dispatch(userLogin(payload));
			};

  return (
    <div className={styles.top}>
      <form onSubmit={handleSubmit}>
        <input type="text" name="email" placeholder="Email" autoFocus autoComplete="off"/>
        <input type="password" name="password"placeholder="Пароль" autoComplete="off"/>
        <button type="submit" disabled={isLoading}>{isLoading ? 'Подождите...' : 'Войти'}</button>
        <h2>Нет аккаунта?</h2>
        <button>Зарегистрироваться</button>
        {error && <Error error={error.error} />}
      </form>
    </div>
  );
}
