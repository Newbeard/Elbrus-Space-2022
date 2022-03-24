import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './style.module.css';
import { useParams } from 'react-router-dom';
import { initStudentsFromServer } from '../../redux/actions/students.action';

function Student() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(initStudentsFromServer());
  }, []);

  const { students } = useSelector((state) => state);
  const currentStudent = students.find(student => student.id === Number(id))


  return (
    <div>
      <div className="row" />
      <div className="row">
        <div className="row">
          <div className="col-6 col-7-small">{currentStudent?.name}</div>
          <div className="col-6 col-9-small">{currentStudent?.surName}</div>
          <div>
            <div>
              <div> Кампус {currentStudent?.campus}</div>
              <h3 className={styles.label}>Окончание обучения</h3>
              <div>{currentStudent?.yearFinishDate}</div>
            </div>
            <div>
              <h3 className={styles.label}>Контакты</h3>
              <div className="col-6 col-9-small">
                <a href={`https://t.me/${currentStudent?.telegram}`}>{`t.me/${currentStudent?.telegram}`}</a>
              </div>
              <div className="col-6 col-9-small">
                <div>GitHub - {currentStudent?.github}</div>
              </div>
            </div>
            <div>
              <h3 className={styles.label}>Место проживания</h3>
            </div>
            <div className={styles.country_and_city}>
              <div className="col-6 col-5-small">
                <div>{currentStudent?.currentCountry}</div>
              </div>
              <div className={`col-6 col-6-small ${styles.label}`}>
                <div>{currentStudent?.currentCity}</div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <h3 className={styles.label}>Откуда ты родом</h3>
            </div>
            <div className={styles.country_and_city}>
              <div className="col-6 col-5-small">
                <div>{currentStudent?.country}</div>
              </div>
              <div className={`col-6 col-6-small ${styles.label}`}>
                <div>{currentStudent?.city}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Student;
