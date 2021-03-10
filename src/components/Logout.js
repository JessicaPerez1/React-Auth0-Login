import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

// import { useHistory } from 'react-router-dom';

const Logout = () => {

    const { logout } = useAuth0();

    return (
        <div className="container">
            <button
                type='button'
                className='form-control-btn'
                onClick ={() => logout()
                }
                > LOGOUT
            </button>
        </div>
    )
}
export default Logout;