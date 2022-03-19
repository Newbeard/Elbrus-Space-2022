import './App.css';
import { Routes, Route } from 'react-router-dom';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import AddMainInfo from './components/AddMainInfo/AddMainInfo';
import AddMoreInfo from './components/AddMoreInfo/AddMoreInfo';
import { useNavigate } from 'react-router-dom'; 
import Footer from './components/Footer/Footer';
import FindPeople from './components/FindPeople/FindPeople';
import EditProfile from './components/EditProfile/EditProfile';
import UserProfile from './components/UserProfile/UserProfile';
import { useEffect, useState } from 'react';
import NavDesktop from './components/NavDesktop/NavDesktop';
import NavMobile from './components/NavMobile/NavMobile';




function App() {
  const [isMobile, setIsMobile] = useState(true)
  const screenWidth = window.innerWidth

  const navigate = useNavigate();

  useEffect(() => {
    screenWidth < 768 ? setIsMobile(true) : setIsMobile(false)
  }, []);

     useEffect(() => {
       if(!localStorage.getItem('id')){navigate('/')}
     }, []);


	return (
		<>
			<div className="wraper">
				<header className="header">
    
          {!isMobile && (<NavDesktop />)}
					
				</header>
     

				<main className="uk-container">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/registration" element={<Registration />} />
						<Route path="/login" element={<Login />} />
						<Route path="/search" element={<FindPeople />} />
						<Route path="/profile" element={<EditProfile />} />
            <Route path="/info" element={<AddMainInfo />} />
            <Route path="/moreInfo" element={<AddMoreInfo />} />
            <Route path="/userprofile" element={<UserProfile />} />
					</Routes>
				</main>

        <footer>
          <Footer />
          {isMobile && (<NavMobile />)}
        </footer>
			</div>
		</>
	);
}

export default App;
