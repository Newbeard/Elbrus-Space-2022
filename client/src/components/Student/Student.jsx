import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './style.module.css';
import { useParams } from 'react-router-dom';
import { initStudentFromServer, deleteStudent } from '../../redux/actions/oneStudent.action';

function Student() {
	const dispatch = useDispatch();
	const { id } = useParams();
	console.log('start', id);
	const student = useSelector((state) => state.student);

	// variant 2
  const {students} = useSelector((state) => state);

  const currentStudent = students.find(student => student.id === Number(id))
	//

	useEffect(() => {
		console.log(1, id);
		dispatch(initStudentFromServer(id));
		console.log(3, id);

		// return()=>{dispatch(deleteStudent())}
	}, []);

	return (
		<div>
			<div className="row" />
			{/* {student && ( */}
			<div className="row">
				<div className="row">
					<div className="col-6 col-7-small">{currentStudent.name}</div>
					<div className="col-6 col-9-small">{currentStudent.surName}</div>
					<div>
						<div>
							<div> Кампус {student['Campus.campusName']}</div>
							<h3 className={styles.label}>Окончание обучения</h3>
							<div>{currentStudent.yearFinishDate}</div>
						</div>
						<div>
							<h3 className={styles.label}>Контакты</h3>
							<div className="col-6 col-9-small">
								<div> Telegram - {currentStudent.telegram}</div>
							</div>
							<div className="col-6 col-9-small">
								<div>GitHub - {currentStudent.github}</div>
							</div>
						</div>
						<div>
							<h3 className={styles.label}>Место проживания</h3>
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
							<h3 className={styles.label}>Откуда ты родом</h3>
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
			{/* )} */}
		</div>
	);
}

export default Student;
