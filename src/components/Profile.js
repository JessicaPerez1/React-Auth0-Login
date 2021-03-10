import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const Profile = () => {
  const { user } = useAuth0();
  return (
    <div className='profile-container'>
        <div className='greetings'>
            Hello, {JSON.stringify(user.nickname)}
            {/* {JSON.stringify(user, null, 2)} */}
        </div>
        <h4>This page will show user info when logged in :)</h4>
    </div>
    )
}
export default Profile;