import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import {  history } from './helpers/history'

import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'
import Navigation from './components/Navigation'
import Products from './components/Products'

import './App.css';

const App = () => {
  return (
    <div className='App'>
    <Router history={history}>
      <Navigation />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/login'>
          <Login />
        </Route>
        <Route exact path='/register'>
          <Register />
        </Route>
        <Route exact path='/products'>
          <Products />
        </Route>
      </Switch>
    </Router>
    </div>
  );
};

export default App;
