import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector  } from 'react-redux';
import { userLogout } from '../../redux/actions/auth';
import { useNavigate } from 'react-router-dom';
// import './css/main.css' 


function StartPage(props) {

  return (
    <div id="wrapper">
      <div id="bg"></div>
			<div id="overlay"></div>
    <section id="header">
						<h1>Elbrus space</h1>
						<p>  Welcome to Elbrus family  </p>
						<nav>
							<ul>
                <li><Link to="/login">SignIn</Link></li>
                <li><Link to="/registration">SignUp</Link></li>
                <li>Counter</li>
							</ul>
						</nav>
					</section>
          </div>

  );
}

export default StartPage;
