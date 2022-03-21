import React from 'react';
import './css/main.css' 
// import './sass/main.scss'

function StartPage(props) {

  return (
    <div id="wrapper">
      <div id="bg"></div>
			<div id="overlay"></div>
    <section id="header">
						<h1>Elbrus space</h1>

						<p> &nbsp;&bull;&nbsp; Welcome to Elbrus family &nbsp;&bull;&nbsp; </p>
						<nav>
							<ul>
								<li><a href="#" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
								<li><a href="#" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
								<li><a href="#" className="icon brands fa-dribbble"><span className="label">Dribbble</span></a></li>
								<li><a href="#" className="icon brands fa-github"><span className="label">Github</span></a></li>
								<li><a href="#" className="icon solid fa-envelope"><span className="label">Email</span></a></li>
							</ul>
						</nav>
					</section>
          </div>
         
          
     
  );
}

export default StartPage;
