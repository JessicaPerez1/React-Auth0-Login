import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

import './Navigation.scss';
import './Button.scss';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="container">
      <button
        type='button'
        className='form-control-btn'
        onClick ={() => loginWithRedirect()}
        > Log in
      </button>
    </div>
  )
}

export default LoginButton;