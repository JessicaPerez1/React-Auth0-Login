import React from 'react';
import { Link } from 'react-router-dom';
import AuthNav from './AuthNav';
// import Profile from './Profile';
import './Navigation.scss';

import { useAuth0 } from '@auth0/auth0-react';

const Navigation = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <nav className='navbar-container'>
      <ul className='navbar-list'>
        <li className='navbar-item'>
          <Link to='/'> 
            Home
          </Link>
        </li>
        <li className='navbar-item'>
          <Link to='/products'>
            Products
          </Link>
        </li>
      {isAuthenticated && 
        <li>
          <Link to='/profile'> 
            Profile
          </Link>
        </li> 
        }
        <li>
          <AuthNav />
        </li>
      </ul>
    </nav>
  )
}

export default Navigation;