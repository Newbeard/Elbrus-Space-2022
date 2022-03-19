import React from 'react';
import { useDispatch, useSelector } from 'react-redux';


function Profile() {
  const students = useSelector((state) => state.students)
  const dispatch = useDispatch();

  
  return (
    <div>
        {/* {users.map(user => <div>name={user.name} lastName={user.lastName}</div> */}

        <div>Имя: </div>
        <div>Кампус: </div>
        <div>Год окончания: { students.finishDate }</div>
        <div>Место рождения: </div>
        <div>Место проживания: </div>
        <div>Контакты: </div>

    </div>
  );
}

export default Profile;
