import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { initStudentsFromServer } from '../../redux/actions/students.action';
import './Student.css'

function Student() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(initStudentsFromServer());
  }, []);

  const { students } = useSelector((state) => state);
  const currentStudent = students.find(student => student.id === Number(id))

  return (
    <div className="container-card-student" >
      <div className="row-info-card-student first">
        <div className='foto-student-in-card'>
          {currentStudent?.name.split('')[0]}
        </div>
        <div className="name-with-city">
          <div className='name-student-in-card'>
            {currentStudent?.name} {currentStudent?.surName}
          </div>
          <div className="city-country">
            {currentStudent?.currentCountry}, {currentStudent?.currentCity}
          </div>
        </div>
      </div>
      <div className="row-info-card-student-education">
        <div className="elbrus-1" >Выпуск Elbrus bootcamp</div>
        <div className="elbrus-2">{currentStudent?.monthFinishDate} {currentStudent?.yearFinishDate}, {currentStudent?.campus}</div>
      </div>
      <div className="row-info-card-student input-with-icon-box-student">
        <p>Telegram&nbsp;<a className="link-telegram" href={`https://t.me/${currentStudent?.telegram}`}>{`t.me/${currentStudent?.telegram}`}</a></p>
        <img className='img-telegram' src="/icon/telegram.png" width={20} alt="" />
      </div>
      <div className="row-info-card-student input-with-icon-box-student">
        <div className="">GitHub &nbsp; {currentStudent?.github}</div>
        <img className='img-github' src="/icon/github.png" width={20} alt="" />
      </div>
    </div>
  );
}

export default Student;
