import styles from './style.module.css'

function EditProfile(props) {
  return (
    <div>

      <div className="row">
        <h1>Редактирование профиля</h1>
      </div>

      <div>
        <form method="post" action="#">
          <div className="row">

            <div className="col-6 col-7-small">
              <input type="text" name="name" placeholder="Имя" />
            </div>
            <div className="col-6 col-9-small">
              <input type="text" name="surName" placeholder="Фамилия" />
            </div>

            <div >
              <div >
                <h3 className={styles.label}>Место проживания</h3>
              </div>
              <div className={styles.country_and_city}>
                <div className="col-6 col-5-small">
                  <select name="countryName" required>
                    <option value="" disabled selected>Страна</option>
                    <option>Любая</option>
                    <option>Россия</option>
                    <option>Грузия</option>
                  </select>
                </div>
                <div className={`col-6 col-6-small ${styles.label}`}>
                  <select name="cityName" required>
                    <option value="" disabled selected>Город</option>
                    <option >Любая</option>
                    <option>Москва</option>
                    <option>Батуми</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="col-6 col-9-small">
              <input type="text" name="telegram" placeholder="Telegram" />
            </div>
            <div className="col-6 col-9-small">
              <input type="text" name="github" placeholder="GitHub" />
            </div>

            <div className="col-6 col-7-small">
              <select name="campusName" required>
                <option value="" disabled selected>Кампус</option>
                <option>Москва</option>
                <option>Санкт-Петербург</option>
              </select>
            </div>
            <div >
              <div >
                <h3 className={styles.label}>Окончание обучения</h3>
              </div>
              <div>
                <div className={styles.country_and_city}>
                  <div className="col-6 col-5-small">
                    <select name="year" required>
                      <option value="" disabled selected>Год</option>
                      <option>За всё время</option>
                      <option>2022</option>
                      <option>2021</option>
                    </select>
                  </div>
                  <div className="col-6 col-5-small">
                    <select name="month" required>
                      <option value="" disabled selected>Месяц</option>
                      <option>За всё время</option>
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

            <div >
              <div >
                <h3 className={styles.label}>Откуда ты родом</h3>
              </div>
              <div className={styles.country_and_city}>
                <div className="col-6 col-5-small">
                  <select name="countryName" required>
                    <option value="" disabled selected>Страна</option>
                    <option>Любая</option>
                    <option>Россия</option>
                    <option>Грузия</option>
                  </select>
                </div>
                <div className={`col-6 col-6-small ${styles.label}`}>
                  <select name="cityName" required>
                    <option value="" disabled selected>Город</option>
                    <option >Любая</option>
                    <option>Москва</option>
                    <option>Батуми</option>
                  </select>
                </div>
              </div>
            </div>

            <div>
              <div >
                <h3 className={styles.label}>Дата рождения</h3>
              </div>
              <input type="date" name="dataOfBirth" min="1950-01-01" max="2007-12-31" />
            </div>

            <div className="col-12">
              <ul className="actions">
                <li><input type="submit" value="Сохранить" /></li>
              </ul>
            </div>

          </div>
        </form>
      </div >
    </div >
  );
}

export default EditProfile;
