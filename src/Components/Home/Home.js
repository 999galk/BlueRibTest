import React from 'react';
import './Home.css';
import Header from '../Header/Header';
import About from '../About/About';
import Practices from '../Practices/Practices';
import Articles from '../Articles/Articles';
import Contact from '../Contact/Contact';
import { withRouter } from 'react-router-dom';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className='home-container' id='home'>
        <Header/>
        <About/>
        <Practices/>
        <Articles/>
        <Contact/>
      </div>
    );
  }
}

export default Home;