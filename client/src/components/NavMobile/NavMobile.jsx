import React from 'react';
import { Link } from 'react-router-dom';

function NavMobile(props) {
  return (
    <div>
        <nav id="navMobile">
          <ul className="container">
            <li><Link to="/"><img class="userFoto" src="/icon/home.png"  width="30px" height="30px" alt="" /></Link></li>
            <li><Link to="/search"><img class="userFoto" src="/icon/search.png"  width="30px" height="30px" alt="" /></Link></li>
            <li><Link to="/profile"><img class="userFoto" src="/icon/profile.png"  width="30px" height="30px" alt="" /></Link></li>
            <li><Link to="/logout"><img class="userFoto" src="/icon/logout.png"  width="30px" height="30px" alt="" /></Link></li>
          </ul>
        </nav>
    </div>
  );
}

export default NavMobile;
