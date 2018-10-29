import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import {checkUser} from './config/localUser';
import Home from './screen/Home';
import LoginScreen from './screen/Profile';
import Dashboard from './screen/Dashboard/index';
import Policy from './screen/policy/index';

class App extends Component {
  constructor(props){
    super(props)
    checkUser();
    console.log(this.props.currentUser);
  }
  render() {
    
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/login' component={LoginScreen} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/contact' component={Policy} />
        </Switch>
      </BrowserRouter>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    UserList:state.UserList
  }
}

export default connect(mapStateToProps)(App);
