import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import AddMainInfo from './components/AddMainInfo/AddMainInfo';
import AddMoreInfo from './components/AddMoreInfo/AddMoreInfo';
import Footer from './components/Footer/Footer';
import FindPeople from './components/FindPeople/FindPeople';
import EditProfile from './components/EditProfile/EditProfile';
import Student from './components/Student/Student';
import NavDesktop from './components/NavDesktop/NavDesktop';
import NavMobile from './components/NavMobile/NavMobile';
import StartPage from './components/StartPage/StartPage';
import { isSession } from './redux/actions/auth';
import Diagram from './components/Diagram/Diagram';






function App() {
  const [isMobile, setIsMobile] = useState(true)
  const screenWidth = window.innerWidth
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { values } = useSelector(state => state.user)

  useEffect(() => {
    screenWidth < 768 ? setIsMobile(true) : setIsMobile(false)
    dispatch(isSession());
  }, []);

  return (
    <>
      <div className="body">
        <header >
          {(!isMobile && values.id) && (<NavDesktop />)}
          <div className="logo">
            <img src="https://elbrusboot.camp/static/newLogo-00ed4b8011624cd94aa1812d35f25088.svg" alt="" />
          </div>
        </header>


        <main className="container">

          <Routes>
            <Route path="/" element={!values.id && (<StartPage />)} />
            <Route path="/home" element={<Home />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/login" element={<Login />} />
            <Route path="/search" element={<FindPeople />} />
            <Route path="/profile" element={<EditProfile />} />
            <Route path="/info" element={<AddMainInfo />} />
            <Route path="/moreInfo" element={<AddMoreInfo />} />
            <Route path="/student/:id" element={<Student />} />
            <Route path="/diagram" element={<Diagram />} />



          </Routes>
        </main>

        <footer>
         
          {isMobile && ( <Footer />)}
        </footer>
      </div>
    </>
  );
}

export default App;
