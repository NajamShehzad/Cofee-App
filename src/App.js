import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './screen/Home';
import LoginScreen from './screen/Profile';
import Header from './components/Header';
import './App.css'

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/login' component={LoginScreen} />
            </Switch>
        </BrowserRouter>
    );
  }
}

export default App;
