import React from 'react';
import logo from './logo.svg';
import './App.css';
import SignIn from './Components/SignIn/SignIn';
import Flights from './Components/Flights/Flights';
import NewFlight from './Components/NewFlight/NewFlight';
import { Switch, Route, Redirect } from 'react-router-dom';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state= {}
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={SignIn}/>
          <Route exact path='/flights' component={Flights}/>
          <Route exact path='/newFlight' component={NewFlight}/>
        </Switch>
      </div>
    );
  }
}

export default App;
