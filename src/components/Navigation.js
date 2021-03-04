import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { logout } from '../services/auth.service';
import { useDispatch, useSelector } from 'react-redux'

const Navigation = () => {
    const history = useHistory()
    // const { user: currentUser } = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const [show, setShow] = useState(false);

    const logOut = () => { dispatch(logout());
  };
    return (
        <nav className='navbar-container'>
            <Link to='/'> Home</Link>
            { currentUser ? (
                <button
                className='logout-btn'
                onClick={() => {
                    logOut();
                    history.push('/')
                }}>Logout</button>
            ) : (
                <Link to='/login'>Login</Link>
            ) }
        </nav>
    )
}

export default Navigation