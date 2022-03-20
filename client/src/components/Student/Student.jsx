import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './style.module.css';

function Profile() {
	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.profile);

	// useEffect(() => {
	//   dispatch(initProfileFromServer())

	// }, [])

	return (
		<div>
			<div className="row" />
			{user && (
				<div className="row">
					<div className="row">
						<div className="col-6 col-7-small">{user.name}</div>
						<div className="col-6 col-9-small">{user.surName}</div>
						<div>
							<div>
								<div> {user['Campus.campusName']}</div>
								<h3 className={styles.label}>Окончание обучения</h3>
								<div>{user.yearFinishDate}</div>
							</div>
							<div>
								<h3 className={styles.label}>Контакты</h3>
								<div className="col-6 col-9-small">
									<div> Telegram - {user.telegram}</div>
								</div>
								<div className="col-6 col-9-small">
									<div>GitHub - {user.github}</div>
								</div>
							</div>
							<div>
								<h3 className={styles.label}>Место проживания</h3>
							</div>
							<div className={styles.country_and_city}>
								<div className="col-6 col-5-small">
									<div>{user['currentCou.countryName']}</div>
								</div>
								<div className={`col-6 col-6-small ${styles.label}`}>
									<div>{user['currentCit.cityName']}</div>
								</div>
							</div>
						</div>
						<div>
							<div>
								<h3 className={styles.label}>Откуда ты родом</h3>
							</div>
							<div className={styles.country_and_city}>
								<div className="col-6 col-5-small">
									<div>{user['Country.countryName']}</div>
								</div>
								<div className={`col-6 col-6-small ${styles.label}`}>
									<div>{user['City.cityName']}</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default Profile;
