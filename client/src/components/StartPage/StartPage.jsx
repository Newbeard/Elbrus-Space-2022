import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector  } from 'react-redux';
import { userLogout } from '../../redux/actions/auth';
import { useNavigate } from 'react-router-dom';
import './css/startpage.css' 


function StartPage(props) {

  return (
    <div className='main-block'>
      
		<div>
  
				
				<div className='links'>
          <div>
                <li><Link to="/login">SignIn</Link></li>
          </div>
          <div>   
                <li><Link to="/registration">SignUp</Link></li>
          </div>  
           <div>
                <li>Counter</li>
          </div>
          </div>
          </div>	
          </div>

  );
}

export default StartPage;
