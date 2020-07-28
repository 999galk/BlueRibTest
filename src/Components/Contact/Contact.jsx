import React from 'react';
import { Map, GoogleApiWrapper,InfoWindow, Marker } from 'google-maps-react';
import './Contact.css';
import pin from './pin.png';
import linkedin_icon from './linkedin-icon-32.png';

const mapStyles = {
  maxWidth: '100%',
  height: '100%',
  marginLeft:'auto',
  marginRight:'auto',
  overflow: 'scroll'
};

class Contact extends React.Component{
	constructor(props){
		super(props);
		this.state={
			showingInfoWindow: false,  //Hides or the shows the infoWindow
		    activeMarker: {},          //Shows the active marker upon click
		    selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
		}
	}

	onMarkerClick = (props, marker, e) =>
	  this.setState({
	    selectedPlace: props,
	    activeMarker: marker,
	    showingInfoWindow: true
	  });

	onClose = props => {
	  if (this.state.showingInfoWindow) {
	    this.setState({
	      showingInfoWindow: false,
	      activeMarker: null
	    });
	  }
	};

	directToMap(){
		window.open("https://www.google.com/maps/place/HaArba'a+St+28,+Tel+Aviv-Yafo/@32.0702795,34.7838695,17z/data=!3m1!4b1!4m5!3m4!1s0x151d4b9d680ff7c7:0x7b569c8815ba00a4!8m2!3d32.0702795!4d34.7860582", '_blank');
	}
	componentDidMount(){
		if(document.querySelector('#contact > div')){
			document.querySelector('#contact > div').children[2].children[0].id='innerMap';
			document.querySelector('#contact > div').children[2].children[0].style.maxWidth='100%';
			document.querySelector('#contact > div').children[2].children[0].style.maxHeight='550px';
			document.querySelector('#contact > div').children[2].children[0].style.left='0';
			document.querySelector('#contact > div').children[2].children[0].style.backgroundColor='#f3f3f3';
		}
	}



	render(){
		return(
			<div className='contact-wrapper' id='contact'>
				<div className='contact-container'>
					<h1 className='contact-title'>CONTACT</h1>
					<form>
					  <div className="form-row">
					    <div className="col">
					      <input type="text" className="form-control" placeholder="שם מלא"/>
					    </div>
					    <div className="col">
					      <input type="phone" className="form-control" placeholder="טלפון"/>
					    </div>
					  </div>
					  <div className="form-group row" id='submit-button'>
					    <div className="col-sm-12">
					      <button type="submit" className="btn btn-primary">צור קשר</button>
					    </div>
				  	</div>
					</form>
					<div onClick={this.directToMap}>
					<Map
			        google={this.props.google}
			        zoom={17}
			        scrollwheel={false}
			        style={mapStyles}
			        initialCenter={{ lat: 32.070470, lng: 34.786080 }}
			        >
				    <Marker
			         onClick={this.onMarkerClick}
			         name={'SH-Law Office'}
			         />
			         <InfoWindow
			          marker={this.state.activeMarker}
			          visible={this.state.showingInfoWindow}
			          onClose={this.onClose}
			        >
			          <div>
			            <h4>{this.state.selectedPlace.name}</h4>
			          </div>
			        </InfoWindow>
			        </Map>
				    </div>
				    <img src={pin} className='pin-image'/>
				    <div className='contact-text'>
				    	<h3>+972 (3) 9452225 | +972 (50) 2359176 | Sagi@sh-law.co</h3>
						<h3>28 Ha’arba’a St., 10 floor, Tel-Aviv 6473925, Israel</h3>
						<a href='https://www.linkedin.com/company/sh-law-co-office-%D7%A9%D7%92%D7%99%D7%90-%D7%A9%D7%9E%D7%A9-%D7%9E%D7%A9%D7%A8%D7%93-%D7%A2%D7%95%D7%A8%D7%9B%D7%99-%D7%93%D7%99%D7%9F/' target="_blank"><img src={linkedin_icon}/></a> 
				    </div>
				</div>
			</div>
			
		);
}
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyD1na-xkk6a7bpPBVwrsTDezmuasOCctg4'
})(Contact);