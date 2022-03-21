import { useDispatch,  useSelector  } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {userRegistration} from '../../redux/actions/auth';
import { useEffect } from 'react'
import Error  from '../Error/Error'
import styles from './style.module.css'

export default function Registration() {
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
			confirmPassword: event.target.confirmPassword.value
		};
				dispatch(userRegistration(payload));
			};
      
  return (
    <div className={styles.label}>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" autoFocus autoComplete="off"/>
        <input type="password" name="password" placeholder="Пароль" autoComplete="off"/>
        <input type="password"	name="confirmPassword" placeholder="Повторите пароль" autoComplete="off"/>
        <button type="submit" disabled={isLoading}>{isLoading ? 'Подождите...' : 'Зарегистрироваться'}</button>
        {error && <Error error={error.error} />}
      </form>
    </div>
  );
}
