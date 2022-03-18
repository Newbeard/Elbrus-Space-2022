import { useDispatch } from 'react-redux';
import { userLogin } from '../../redux/actions/auth';
import { useNavigate } from 'react-router-dom';


export default function Login() {
  const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleSubmit = (event) => {
		event.preventDefault();
		const payload = {
			email: event.target.email.value,
			password: event.target.password.value,
			confirmPassword: event.target.confirmPassword.value
		};
				dispatch(userLogin(payload));
				navigate('/');
			};

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>Вход</div>
        <input type="text" placeholder="Email" autoFocus autoComplete="off"/>
        <input type="text" placeholder="Пароль" autoComplete="off"/>
        <button >Войти</button>
        <button>Регистрация</button>
        <div></div>
      </form>
    </div>
  );
}
