import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

import './Navigation.scss'

const Login = () => {

    const { loginWithRedirect } = useAuth0();

    return (
        <div className="container">
            <button
                type='button'
                className='form-control-btn'
                onClick ={() => loginWithRedirect()}
                > LOGIN
            </button>
        </div>
    )
}

export default Login;