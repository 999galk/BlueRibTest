import React from 'react';
import './Header.css';
import arrow from './arrow_down2.png';

const Header = () => {
	let containerStyle = {
		height: window.screen.height
	}
	return(
		<div className='header-wrapper'>
		<div className='header-container'>
			<div className='round-container'>
				<div className='rounded-welcome'>
					<h1 className="upper-case">Welcome to<br/>SH-Law<br/>Law Offices</h1>
					<a href="#about"><img className="scroll-home" src={arrow}/></a>
				</div>
			</div>
		</div>
		<div className='clear'></div>
		</div>
	);
}

export default Header; 