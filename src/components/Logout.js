import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

// import { useHistory } from 'react-router-dom';

const Logout = () => {

    const { logout, isAuthenticated } = useAuth0();

    return (
    <React.Fragment>
    { isAuthenticated && (
        <div className="logout-container">
            <button
                type='button'
                className='form-control-btn'
                onClick ={() => logout()
                }
                > LOGOUT
            </button>
        </div>
        )}
    </React.Fragment>
    )
}
export default Logout;