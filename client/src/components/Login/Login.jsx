import { useDispatch } from 'react-redux';
import { userLogin } from '../../redux/actions/auth';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import Error from '../Error/Error'
import { NavLink } from 'react-router-dom';
import NavbarAuthorization from '../NavbarAutorization/NavbarAuthorization';


export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, values, isLoading } = useSelector(state => state.user)
  // const [loginIsActive, setLoginIsActive] = useState(true)
  const [registrIsActive, setRegistrIsActive] = useState(true)

  // useEffect(() => {
  //   if (values.id) {
  //     navigate('/home')
  //   };
  // }, [values])

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

      <NavbarAuthorization />
      
      <form onSubmit={handleSubmit}>
        <input type="text" name="email" placeholder="Email" autoFocus autoComplete="off" />
        <input type="password" name="password" placeholder="Пароль" autoComplete="off" />
        <button className="login-form-button" type="submit" disabled={isLoading}>{isLoading ? 'Подождите...' : 'Войти'}</button>
        {error && <Error error={error.error} />}
      </form>
    </div >
  );
}
