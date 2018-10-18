import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './screen/Home';
import LoginScreen from './screen/Login';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div style={{margin:20}}>
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/login' component={LoginScreen} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
