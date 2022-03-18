
import { useDispatch } from 'react-redux';
import { registration } from '../../redux/actions/regLogOut.actions';
import { useNavigate } from 'react-router-dom';
import {userRegistration} from '../../redux/actions/regLogOut.actions';


export default function Registration() {
  const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleSubmit = (event) => {
		event.preventDefault();
		const payload = {
			email: event.target.email.value,
			password: event.target.password.value,
			confirmPassword: event.target.confirmPassword.value
		};
				dispatch(userRegistration(payload));
				navigate('/');
			};
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>Регистрация</div>
        <input type="text" name="email" placeholder="Email" autoFocus />
        <input type="password" name="password" placeholder="Пароль"/>
        <input type="password"	name="confirmPassword" placeholder="Повторите пароль"/>
        <button>Зарегистрироваться</button>
      </form>
    </div>
  );
}
