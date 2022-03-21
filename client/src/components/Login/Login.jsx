import { useDispatch } from 'react-redux';
import { userLogin } from '../../redux/actions/auth';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import Error from '../Error/Error'
import styles from './style.module.css'


export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, values, isLoading } = useSelector(state => state.user)

  useEffect(() => {
    if(values.id) {
      navigate('/home')
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
    <div className='login-form'>
      <form onSubmit={handleSubmit}>
        <div>
        <input type="text" name="email" placeholder="Email" autoFocus autoComplete="off" />
        <input type="password" name="password" placeholder="Пароль" autoComplete="off" />
        </div>
        <div>
          <button type="submit" disabled={isLoading}>{isLoading ? 'Подождите...' : 'Войти'}</button>
        </div>
        {error && <Error error={error.error} />}
      </form>
    </div>
  );
}
