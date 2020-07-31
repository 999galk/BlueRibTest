import React from 'react';
import Slider from "react-slick";
import './Articles.css';
import people from './People-at-Work.jpg';
import {isMobile, isTablet} from 'react-device-detect';
import { withRouter } from 'react-router-dom';

class Articles extends React.Component {
  render() {
    return (
      <div className='articles-wrapper' id='articles'>
      <div className='articles-cover'>
      <div className='articles-container'>
        <h2>מאמרים</h2>
        <div className='articles-grid'>
          <div className='article-card-wrapper shadow-2 grow' onClick={() => this.props.history.push(`/article/crowdfunding`)}>
          	<img src={people}/>
            <h3>מימון המונים</h3>
            <p>טקסט<br/>טקסט<br/>טקסט<br/>טקסט<br/>טקסט<br/>טקסט<br/>טקסט</p>
          </div>
          <div className='article-card-wrapper shadow-2 grow' onClick={() => this.props.history.push(`/article/founders-agreement`)}>
          	<img src={people}/>
            <h3>הסכם מייסדים</h3>
            <p>טקסט<br/>טקסט<br/>טקסט<br/>טקסט<br/>טקסט<br/>טקסט<br/>טקסט</p>
          </div>
          <div className='article-card-wrapper shadow-2 grow' onClick={() => this.props.history.push(`/article/business-covid19`)}>
          	<img src={people}/>
            <h3>מדריך לעסקים - הישרדות בימי קורונה</h3>
            <p>טקסט<br/>טקסט<br/>טקסט<br/>טקסט<br/>טקסט<br/>טקסט<br/>טקסט</p>
          </div>
          <div className='article-card-wrapper shadow-2 grow' onClick={() => this.props.history.push(`/article/business-covid19`)}>
            <img src={people}/>
            <h3>מדריך לעסקים - הישרדות בימי קורונה</h3>
            <p>טקסט<br/>טקסט<br/>טקסט<br/>טקסט<br/>טקסט<br/>טקסט<br/>טקסט</p>
          </div>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Articles);