import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userLogout } from '../../redux/actions/auth';
import { useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux'



function NavMobile(props) {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const hendlerClick = (event) => {
    event.preventDefault()
      dispatch(userLogout())
    navigate('/')
  }

  return (
    <div>
        {/* <nav id="navMobile">
          <ul className="container">
            <li><Link to="/"><img className="userFoto" src="/icon/home.png"  width="30px" height="30px" alt="" /></Link></li>
            <li><Link to="/search"><img className="userFoto" src="/icon/search.png"  width="30px" height="30px" alt="" /></Link></li>
            <li><Link to="/profile"><img className="userFoto" src="/icon/profile.png"  width="30px" height="30px" alt="" /></Link></li>
            <li><Link to="/logout" onClick={hendlerClick}><img className="userFoto" src="/icon/logout.png"  width="30px" height="30px" alt="" /></Link></li>
          </ul>
        </nav> */}
    </div>
  );
}

export default NavMobile;
