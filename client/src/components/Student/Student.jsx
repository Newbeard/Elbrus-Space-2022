import {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './style.module.css';
import { useParams } from 'react-router-dom';
import { initStudentFromServer } from '../../redux/actions/oneStudent.action'

function Student() {
	const dispatch = useDispatch();
  const {id} = useParams();
  console.log('start',id);
	const { student } = useSelector((state) => state.student);
  useEffect(() => {
    console.log(1, id);
    dispatch(initStudentFromServer(id))
    console.log(3, id);
  }, [])

	return (
		<div>
			<div className="row" />
			{student && (
				<div className="row">
					<div className="row">
						<div className="col-6 col-7-small">{student.name}</div>
						<div className="col-6 col-9-small">{student.surName}</div>
						<div>
							<div>
								<div> Кампус {student['Campus.campusName']}</div>
								<h3 className={styles.label}>Окончание обучения</h3>
								<div>{student.yearFinishDate}</div>
							</div>
							<div>
								<h3 className={styles.label}>Контакты: </h3>
								<div className="col-6 col-9-small">
									<div> Telegram - {student.telegram}</div>
								</div>
								<div className="col-6 col-9-small">
									<div>GitHub - {student.github}</div>
								</div>
							</div>
							<div>
								<h3 className={styles.label}>Место проживания: </h3>
							</div>
							<div className={styles.country_and_city}>
								<div className="col-6 col-5-small">
									<div>{student['currentCou.countryName']}</div>
								</div>
								<div className={`col-6 col-6-small ${styles.label}`}>
									<div>{student['currentCit.cityName']}</div>
								</div>
							</div>
						</div>
						<div>
							<div>
								<h3 className={styles.label}>Место рождения: </h3>
							</div>
							<div className={styles.country_and_city}>
								<div className="col-6 col-5-small">
									<div>{student['Country.countryName']}</div>
								</div>
								<div className={`col-6 col-6-small ${styles.label}`}>
									<div>{student['City.cityName']}</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default Student;
