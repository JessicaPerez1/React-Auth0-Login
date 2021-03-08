import React from 'react';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { logout } from '../actions/index'

const Navigation = ({ auth }) => {
//     const history = useHistory()

//     const logOut = (e) => {
//         e.preventDefault();
//         logout()
//   };

    return (
        <nav className='navbar-container'>
            <h1>NAVIGATION</h1>
            <Link to='/'> Home</Link>
            <Link to='/login'> Login</Link>
            {/* if is logged in show the logout button */}
            <Link to='/logout'> Logout</Link>
            {/* { auth ? (
                <button
                className='logout-btn'
                onClick={() => {
                    logOut();
                    history.push('/')
                }}>Logout</button>
            ) : (
                <Link to='/login'>Login</Link>
            ) } */}
            <Link to='/products'> Products</Link>
        </nav>
    )
}

// function mapStateToProps(state) {
//   return {
//     auth: state.isAuthenticated
//   };
// }

export default Navigation;