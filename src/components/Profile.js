import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

// import { useHistory } from 'react-router-dom';

const Profile = () => {

    const { user } = useAuth0();

    return (
        <div className="profile-container">
            {JSON.stringify(user, null, 2)}
        </div>

    )
}
export default Profile;