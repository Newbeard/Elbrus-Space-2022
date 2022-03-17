import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import AddMainInfo from './components/AddMainInfo/AddMainInfo';
import AddMoreInfo from './components/AddMoreInfo/AddMoreInfo';
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { sessionCheck } from './redux/actions/regLogOut.actions';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import Footer from './components/Footer/Footer';
import FindPeople from './components/FindPeople/FindPeople';

function App() {
  
	return (
		<>
			<div className="wraper">
				<header className="header">
					<Nav />
				</header>
            <FindPeople />

				<main className="uk-container">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/registration" element={<Registration />} />
						<Route path="/login" element={<Login />} />
            <Route path="/info" element={<AddMainInfo />} />
            <Route path="/moreInfo" element={<AddMoreInfo />} />
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
