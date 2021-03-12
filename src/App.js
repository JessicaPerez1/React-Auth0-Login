import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import Profile from './pages/Profile'
import Navigation from './components/Navigation'

import { useAuth0 } from '@auth0/auth0-react'
import './App.scss';

const App = () => {
  const { isLoading } = useAuth0

  if (isLoading) return <div>Loading...</div>

  return (
    <React.Fragment>
      <Navigation />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/profile'>
          <Profile />
        </Route>
      </Switch>
      </React.Fragment>
  );
};

export default App;
