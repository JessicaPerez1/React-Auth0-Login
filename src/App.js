import React from 'react'
import { Route, Switch } from 'react-router-dom'
// import history from './helpers/History'

import Home from './components/Home'
import Profile from './components/Profile'
import Navigation from './components/Navigation'
import Products from './components/Products'

// import PrivateRoute from './PrivateRoute'
import { useAuth0 } from '@auth0/auth0-react'
import './App.scss';

const App = () => {
  const { isLoading } = useAuth0

  if (isLoading) return <div>Loading...</div>

  return (
    <div className='App'>
      <Navigation />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/products'>
          <Products />
        </Route>
        <Route exact path='/profile'>
          <Profile />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
