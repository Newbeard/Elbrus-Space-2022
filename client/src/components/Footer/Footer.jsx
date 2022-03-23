import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Footer(props) {
  const icons = [
    { id: 1, isActive: false },
    { id: 2, isActive: false },
    { id: 3, isActive: false },
    { id: 4, isActive: false }
  ]
  const [isActive, setIsActive] = useState([])

  useEffect(() => {
    setIsActive(icons);
  }, [])

  function changeActive(id) {
    icons.map((elem) => elem.isActive = false)
    icons[id - 1].isActive = true
    setIsActive(icons);
  }

  return (
    <div className="footer navbar-mobile">
      <Link to="/search" style={{ textDecoration: 'none' }}>
        <div onClick={() => changeActive(1)} className="logo-navbar-mobile gap-2">
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5935 23.4375C19.0301 23.4375 23.4373 19.0303 23.4373 13.5938C23.4373 8.1572 19.0301 3.75 13.5935 3.75C8.15695 3.75 3.74976 8.1572 3.74976 13.5938C3.74976 19.0303 8.15695 23.4375 13.5935 23.4375Z" stroke={isActive[0]?.isActive === true ? "#3F29A4" : "#D1D1D1"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M20.5537 20.5547L26.2491 26.2501" stroke={isActive[0]?.isActive === true ? "#3F29A4" : "#D1D1D1"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <p>Поиск</p>
        </div>
      </Link>
      <Link to="/diagram" style={{ textDecoration: 'none' }}>
        <div onClick={() => changeActive(2)} className="logo-navbar-mobile gap-1">
          <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M26.1569 26.157H4.84436" stroke={isActive[1]?.isActive === true ? "#3F29A4" : "#D1D1D1"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M17.4375 9.6875V21.3125C17.4375 21.8475 17.8712 22.2812 18.4062 22.2812H23.25C23.785 22.2812 24.2188 21.8475 24.2188 21.3125V9.6875C24.2188 9.15247 23.785 8.71875 23.25 8.71875H18.4062C17.8712 8.71875 17.4375 9.15247 17.4375 9.6875Z" stroke={isActive[1]?.isActive === true ? "#3F29A4" : "#D1D1D1"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12.5938 3.875H7.75C7.21497 3.875 6.78125 4.30872 6.78125 4.84375V21.3125C6.78125 21.8475 7.21497 22.2812 7.75 22.2812H12.5938C13.1288 22.2812 13.5625 21.8475 13.5625 21.3125V4.84375C13.5625 4.30872 13.1288 3.875 12.5938 3.875Z" stroke={isActive[1]?.isActive === true ? "#3F29A4" : "#D1D1D1"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <p>Данные</p>
        </div>
      </Link>
      <Link to="/home" style={{ textDecoration: 'none' }}>
        <div onClick={() => changeActive(3)} className="logo-navbar-mobile gap-3">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.125 25.375H21.875" stroke="#D1D1D1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14 14.875C15.933 14.875 17.5 13.308 17.5 11.375C17.5 9.442 15.933 7.875 14 7.875C12.067 7.875 10.5 9.442 10.5 11.375C10.5 13.308 12.067 14.875 14 14.875Z" stroke={isActive[2]?.isActive === true ? "#3F29A4" : "#D1D1D1"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M22.75 11.375C22.75 19.25 14 25.375 14 25.375C14 25.375 5.25 19.25 5.25 11.375C5.25 9.05436 6.17187 6.82876 7.81282 5.18782C9.45376 3.54687 11.6794 2.625 14 2.625C16.3206 2.625 18.5462 3.54687 20.1872 5.18782C21.8281 6.82876 22.75 9.05436 22.75 11.375V11.375Z" stroke={isActive[2]?.isActive === true ? "#3F29A4" : "#D1D1D1"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <p>Карта</p>
        </div>
      </Link>
      <Link to="/profile" style={{ textDecoration: 'none' }}>
        <div onClick={() => changeActive(4)} className="logo-navbar-mobile gap-6">
          <svg width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.4813 6.30768C16.2646 9.23078 14.0486 11.6154 11.616 11.6154C9.18327 11.6154 6.96344 9.23133 6.75058 6.30768C6.52943 3.26682 8.68567 1 11.616 1C14.5462 1 16.7025 3.32211 16.4813 6.30768Z" stroke={isActive[3]?.isActive === true ? "#3F29A4" : "#D1D1D1"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M11.6155 15.1538C6.80541 15.1538 1.92345 17.8076 1.02004 22.8168C0.91112 23.4205 1.2528 23.9999 1.88475 23.9999H21.3462C21.9787 23.9999 22.3204 23.4205 22.2115 22.8168C21.3075 17.8076 16.4256 15.1538 11.6155 15.1538Z" stroke={isActive[3]?.isActive === true ? "#3F29A4" : "#D1D1D1"} strokeWidth="1.5" strokeMiterlimit="10" />
          </svg>
          <p>Профиль</p>
        </div>
      </Link>
    </div>
  );
}

