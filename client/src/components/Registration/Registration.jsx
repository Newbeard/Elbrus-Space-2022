import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userRegistration } from '../../redux/actions/auth';
import { useEffect } from 'react'
import Error from '../Error/Error'
import styles from './style.module.css'
import { Link } from 'react-router-dom';

export default function Registration() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, values, isLoading } = useSelector(state => state.user)

  useEffect(() => {
    if(values.id) {
      navigate('/info')
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
    <div className='login-form'>
      <div className='nav-login-registration'>
        <div className='link-nav link-nav--active' >
          <Link to="/login" className='link'>
            <h3 className='h3-link'>Вход</h3>
          </Link>
        </div>
        <div className='link-nav'>
          <Link to="/registration" className='link'>
            <h3 className='h3-link'>Регистрация</h3>
          </Link>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="email" placeholder="Email*" autoFocus autoComplete="off" />
        <input type="password" name="password" placeholder="Пароль*" autoComplete="off" />
        <input type="password" name="confirmPassword" placeholder="Повторите пароль*" autoComplete="off" />
        <p className='post-scriptum-necessarily'>*Обязательно для заполнения</p>
        <button className='registration-form-button' type="submit" disabled={isLoading}>{isLoading ? 'Подождите...' : 'Зарегистрироваться'}</button>
        {error && <Error error={error.error} />}
      </form>
    </div>
  );
}
