import styles from './style.module.css';
import { initProfileFromServer } from '../../redux/actions/userProfile.action';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';

function EditProfile(props) {
	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.profile);

	useEffect(() => {
		dispatch(initProfileFromServer());
	}, []);

	function hendleSubmit(event) {
		event.preventDefault();
		const form = event.target;
		const dataForm = Object.fromEntries(new FormData(form));
		console.log(dataForm);
		//dispatch(editProfileFromServer(dataForm))
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
									<select name="campusName">
										<option> {user['Campus.campusName']}</option>
										<option>Москва</option>
										<option>Санкт-Петербург</option>
										<option>Онлайн</option>
									</select>
								</div>
								<div>
									<div>
										<div className={styles.country_and_city}>
											<div className="col-6 col-9-small">
												<select name="yearFinishDate">
													<option>{user.yearFinishDate}</option>
													<option>2026</option>
													<option>2025</option>
													<option>2024</option>
													<option>2023</option>
													<option>2022</option>
													<option>2021</option>
													<option>2020</option>
													<option>2019</option>
													<option>2018</option>
												</select>
											</div>
										</div>
										<div className="col-6 col-5-small">
											<select name="monthFinishDate">
												<option>{user.monthFinishDate}</option>
												<option>Январь</option>
												<option>Февраль</option>
												<option>Март</option>
												<option>Апрель</option>
												<option>Май</option>
												<option>Июнь</option>
												<option>Июль</option>
												<option>Август</option>
												<option>Сентябрь</option>
												<option>Октябрь</option>
												<option>Ноябрь</option>
												<option>Декабрь</option>
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
									name="dataOfBirth"
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
