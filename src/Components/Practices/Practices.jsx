import React from 'react';
import hitech from './hitech.png';
import internet from './internet.png';
import mis from './mishari.png';
import { withRouter } from 'react-router-dom';
import './Practices.css';

class Practices extends React.Component{
	constructor(props){
		super(props);
		this.onPracticeChoice = this.onPracticeChoice.bind(this);
		this.state = {

		}
	}

	onPracticeChoice = (name) =>{
		this.props.history.push(`/practice/${name}`);
	}

	render(){
		return(
			<div className='practices-wrapper' id='practices'>
			<div className='practices-container'>
				<h1 className='practices-title'>תחומי עיסוק</h1>
				<div className='practices-cards-container'>
					<div className='card-container grow' id='commercial-law' onClick={() => this.props.history.push(`/practice/commercial-law`)}>
						<img src={internet} className='card-image'/>
						<h1 className='card-title'>משפט מסחרי-עסקי</h1>
						<p className='card-text'>פסקה קצרה מתארת את העיסוק</p>
					</div>
					<div className='card-container grow' id='hitech' onClick={() => this.props.history.push(`/practice/hitech`)}>
						<img src={hitech} className='card-image'/>
						<h1 className='card-title'>הייטק</h1>
						<p className='card-text'>פסקה קצרה מתארת את העיסוק</p>
					</div>
					<div className='card-container grow' id='capital-market' onClick={() => this.props.history.push(`/practice/capital-market`)}>
						<img src={internet} className='card-image'/>
						<h1 className='card-title'>שוק ההון</h1>
						<p className='card-text'>פסקה קצרה מתארת את העיסוק</p>
					</div>
				</div>
			</div>
			</div>
		);
	}
}

export default withRouter(Practices);