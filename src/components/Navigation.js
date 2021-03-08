import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/index'

const Navigation = ({ auth }) => {
    const history = useHistory()

    const logOut = (e) => {
        e.preventDefault();
        logout()
  };

    return (
        <nav className='navbar-container'>
            <Link to='/'> Home</Link>
            { auth ? (
                <button
                className='logout-btn'
                onClick={() => {
                    logOut();
                    history.push('/')
                }}>Logout</button>
            ) : (
                <Link to='/login'>Login</Link>
            ) }
            <Link to='/products'> Products</Link>
        </nav>
    )
}

function mapStateToProps(state) {
  return {
    auth: state.isAuthenticated
  };
}

export default connect(mapStateToProps, { logout })(Navigation);