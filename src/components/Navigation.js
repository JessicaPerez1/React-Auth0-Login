import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react'
import Login from './Login'
import Logout from './Logout'

import './Navigation.scss';

const Navigation = () => {
     const { isAuthenticated } = useAuth0();

    //  useEffect(() => {
    //      const showProfile = () => {
    //          return <Link to='/profile'> Profile</Link>
    //      } 
    //      if(isAuthenticated) {
    //          showProfile () 
    //      } else <div />
    //  }, [isAuthenticated])

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
              { isAuthenticated ? (
                <>
                    <li className='navbar-item'>
                        <Link to='/profile'>
                            Profile
                        </Link>
                    </li>
                    <li className='navbar-item'><Logout /></li>
                </>
                ) : <li className='navbar-item'><Login /></li> }
                </ul>
        </nav>
    )
}

export default Navigation;