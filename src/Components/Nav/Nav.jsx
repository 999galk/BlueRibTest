import React from 'react';
import './Nav.css';
import logo from './LOGO_2_white-0.png';

const Nav = () => {
	return(
		<nav className="navbar navbar-expand-lg navbar-light">
			<a className="navbar-brand" href="/"><img src={logo}/></a>
		  <div className="navbar-collapse" id="navbarNav">
		    <ul className="navbar-nav">
		      <li className="nav-item active" id="home-link">
		        <a className="nav-link" href="/">ראשי <span className="sr-only">(current)</span></a>
		      </li>
		      <li className="nav-item" id="about-link">
		        <a className="nav-link" href="/#about">פרופיל אישי</a>
		      </li>
		      <li className="nav-item" id='practices-link'>
		        <a className="nav-link" href="/#practices">תחומי עיסוק</a>
		      </li>
		      <li className="nav-item" id='articles-link'>
		        <a className="nav-link" href="/#articles">מאמרים</a>
		      </li>
		      <li className="nav-item" id='contact-link'>
		        <a className="nav-link" href="/#contact">צור קשר</a>
		      </li>
		    </ul>
		  </div>
		</nav>
	);
}

export default Nav;