import styles from './style.module.css';
import { initProfileFromServer, editProfileFromServer } from '../../redux/actions/userProfile.action';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';

const months = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
];
const years = [ '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025', '2026'];
const сampus = [ 'Москва', 'Санкт-Петербург', 'Онлайн'];

function EditProfile(props) {
	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.profile);

	useEffect(() => {
		dispatch(initProfileFromServer());
	}, []);

	function hendleSubmit(event) {
		event.preventDefault();
		const form = event.target;
		const data = Object.fromEntries(new FormData(form));
		dispatch(editProfileFromServer(data))
	}
	return (
		<div>
			<div className="row" />
			{user && (
				<div className="row">
					<h1>Редактирование профиля</h1>
					<form onSubmit={hendleSubmit}>
						<div className="row">
							<div className="col-6 col-7-small">
								<input
									type="text"
									name="name"
									placeholder="Имя"
									defaultValue={user.name}
									autoFocus
									autoComplete="off"
								/>
							</div>
							<div className="col-6 col-9-small">
								<input
									type="text"
									name="surName"
									placeholder="Фамилия"
									defaultValue={user.surName}
									autoComplete="off"
								/>
							</div>

							<div>
								<div>
									<h3 className={styles.label}>Место проживания</h3>
								</div>
								<div className={styles.country_and_city}>
									<div className="col-6 col-5-small">
										<input
											type="text"
											name="currentCountryName"
											placeholder="Страна"
											defaultValue={user['currentCou.countryName']}
											autoComplete="off"
										/>
									</div>
									<div className={`col-6 col-6-small ${styles.label}`}>
										<input
											type="text"
											name="currentCityName"
											placeholder="Город"
											defaultValue={user['currentCit.cityName']}
											autoComplete="off"
										/>
									</div>
								</div>
							</div>
							<div>
								<h3 className={styles.label}>Контакты</h3>
								<div className="col-6 col-9-small">
									<input
										type="text"
										name="telegram"
										defaultValue={user.telegram}
										placeholder="Telegram"
									/>
								</div>
								<div className="col-6 col-9-small">
									<input type="text" name="github" defaultValue={user.github} placeholder="GitHub" />
								</div>
							</div>
							<div />
							<div>
								<h3 className={styles.label}>Окончание обучения</h3>

								<div className="col-6 col-7-small">
                <select name="campusName" >
                        {!user['Campus.campusName'] && <option disabled selected>Кампус</option>}
                        {сampus.map((el, i) => (<option key={i} selected={!user['Campus.campusName'] === el}>{el}</option>))}
                        </select>

								</div>
								<div>
									<div>
										<div className={styles.country_and_city}>
											<div className="col-6 col-9-small">
                        <select name="yearFinishDate" >
                        {!user.yearFinishDate && <option disabled selected>Год</option>}
                        {years.map((el, i) => (<option key={i} selected={user?.yearFinishDate === el}>{el}</option>))}
                        </select>
											</div>
										</div>
										<div className="col-6 col-5-small">
                    <select name="monthFinishDate" >
                    {!user.monthFinishDate && <option disabled selected>Месяц</option>}
                    {months.map((el, i) => (<option key={i} selected={user?.monthFinishDate === el}>{el}</option>))}
                    </select>
										</div>
									</div>
								</div>
							</div>

							<div>
								<div>
									<h3 className={styles.label}>Откуда ты родом</h3>
								</div>
								<div className={styles.country_and_city}>
									<div className="col-6 col-5-small">
										<input
											type="text"
											name="countryName"
											placeholder="Страна"
											defaultValue={user['Country.countryName']}
											autoComplete="off"
										/>
									</div>
									<div className={`col-6 col-6-small ${styles.label}`}>
										<input
											type="text"
											name="cityName"
											placeholder="Город"
											defaultValue={user['City.cityName']}
											autoComplete="off"
										/>
									</div>
								</div>
							</div>

							<div>
								<div>
									<h3 className={styles.label}>Дата рождения</h3>
								</div>
								<input
									type="date"
									name="dateOfBirth"
									min="1950-01-01"
									max="2007-12-31"
									defaultValue={user.dateOfBirth}
								/>
							</div>

							<div className="col-12">
								<ul className="actions">
									<li>
										<input type="submit" defaultValue="Сохранить" />
									</li>
								</ul>
							</div>
						</div>
					</form>
				</div>
			)}
		</div>
	);
}

export default EditProfile;
