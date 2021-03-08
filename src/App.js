import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import {  history } from './helpers/history'

import Login from './components/Login'
// import Logout from './components/Logout'
import Home from './components/Home'
// import Profile from './components/Profile'
import Navigation from './components/Navigation'
import Products from './components/Products'

import { useAuth0 } from '@auth0/auth0-react'
import './App.css';

const App = () => {
  const { isLoading } = useAuth0

  if (isLoading) return <div>Loading...</div>
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
        {/* <Route exact path='/logout'>
          <Logout />
        </Route>
        <Route exact path='/profile'>
          <Profile />
        </Route> */}
        <Route exact path='/products'>
          <Products />
        </Route>
      </Switch>
    </Router>
    </div>
  );
};

export default App;
