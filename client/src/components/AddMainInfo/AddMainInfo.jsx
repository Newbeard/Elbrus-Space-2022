import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddMainInfo() {
  const navigate = useNavigate()
  
  async function addInfo(event) {
    event.preventDefault()
    const form = event.target;
    const dataForm = Object.fromEntries(new FormData(form));
    localStorage.setItem('addedInfo', JSON.stringify(dataForm))
    const qwe = JSON.parse(localStorage.getItem('addedInfo'))
    console.log(qwe);
    // axios.post('/info', { dataForm, id })
    // navigate('/moreInfo')
  }

  return (
    <div className='top'>
      <form onSubmit={addInfo}>
        <div>Расскажите о себе!</div>
        <div>*Обязательные поля для заполнения</div>
        <input type="text" name="name" placeholder="Имя" required></input>
        <input type="text" name="surName" placeholder="Фамилия"></input>
        <div>Откуда ты родом</div>
        <input type="text" name="countryName" placeholder="Страна" required></input>
        <input type="text" name="cityName" placeholder="Город" required></input>
        <select name="campusName" >
            <option value="" disabled selected>Кампус</option>
            <option>Любой</option>
            <option>Санкт-Петербург</option>
            <option>Москва</option>
            <option>Онлайн</option>
        </select>
        <button>Далее</button>

      </form>
    </div>
  );
}

export default AddMainInfo;
