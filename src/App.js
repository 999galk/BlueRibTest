import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import PracticePage from './Components/PracticePages/ParcticePage';
import ArticlePage from './Components/ArticlePages/ArticlePage';
import { withRouter,Switch, Route, Redirect } from 'react-router-dom';
import "../node_modules/slick-carousel/slick/slick.css"; 
import "../node_modules/slick-carousel/slick/slick-theme.css";
import Nav from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state= {}
  }

  render() {
    return (
      <div className='App'>
        <Nav/>
        <Switch>
          <Route exact path='/practice/:id' component={PracticePage}/>
          <Route exact path='/article/:id' component={ArticlePage}/>
          <Route path='/' component={Home}/>
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default withRouter(App);
