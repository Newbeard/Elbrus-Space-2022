import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { sessionCheck } from './redux/actions/regLogOut.actions';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import Footer from './components/Footer/Footer';
import FindPeople from './components/FindPeople/FindPeople';
import EditProfile from './components/EditProfile/EditProfile';

import Maps from './components/Map/Map';
import Diagram from './components/Diagram/Diagram';

function App() {
  
	return (
		<>
			<div className="wraper">
				<header className="header">
					<Nav />
				</header>

            {/* <FindPeople /> */}
            <EditProfile />


        <Maps/>
        <Diagram/>
       
              
				<main className="uk-container">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/registration" element={<Registration />} />
						<Route path="/login" element={<Login />} />
					</Routes>
				</main>
        <footer>
          <Footer />
        </footer>
			</div>
		</>
	);
}

export default App;
