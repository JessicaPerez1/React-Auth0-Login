import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import Profile from './pages/Profile'
import Navigation from './components/Navigation'
import Loading from './components/Loading'
import ProtectedRoute from './auth/Protected-route'

import { useAuth0 } from '@auth0/auth0-react'
import './App.scss';

const App = () => {
  const { isLoading } = useAuth0

  if (isLoading) return <Loading />

  return (
    <React.Fragment>
      <Navigation />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <ProtectedRoute path="/profile" component={Profile} />
      </Switch>
      </React.Fragment>
  );
};

export default App;
