import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const Login = () => {

    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return (
      <React.Fragment>
      { !isAuthenticated && (
        <div className="login-container">
            <button
                type='button'
                className='form-control-btn'
                onClick ={() => loginWithRedirect()}
                > LOGIN
            </button>
        </div>
      )}
    </React.Fragment>
    )
}

export default Login;