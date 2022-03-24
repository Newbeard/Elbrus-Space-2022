import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { initStudentsFromServer } from '../../redux/actions/students.action';
import './Student.css'

function Student() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    // dispatch(initStudentsFromServer());
  }, []);

  const { students } = useSelector((state) => state);
  const currentStudent = students.find(student => student.id === Number(id))
  console.log(currentStudent);

  return (
    <div className="container-card-student" >
      <div className="row-info-card-student first">{currentStudent?.name} {currentStudent?.surName}</div>
      <div className="row-info-card-student">{currentStudent?.currentCountry}, {currentStudent?.currentCity}</div>
      {/* <div className="row-info-card-student">{currentStudent?.currentCity}</div> */}
      <div className="row-info-card-student">Выпуск Elbrus bootcamp: {currentStudent?.monthFinishDate} {currentStudent?.yearFinishDate}, {currentStudent?.campus}</div>
      <div className="row-info-card-student">Telegram<a href={`https://t.me/${currentStudent?.telegram}`}>{`t.me/${currentStudent?.telegram}`}</a></div>
      <div className="row-info-card-student">GitHub - {currentStudent?.github}</div>
    </div>
  );
}

export default Student;
