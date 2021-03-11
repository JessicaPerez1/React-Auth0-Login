import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import './Button.scss';

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <div className="container">
        <button
            type='button'
            className='form-control-btn'
            onClick ={() => logout({
              returnTo: window.location.origin
            })
            }
            > Log out
        </button>
    </div>
  )
}
export default LogoutButton;