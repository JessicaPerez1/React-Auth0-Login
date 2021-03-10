import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const Profile = () => {
  const { user } = useAuth0();
  const { name } = user;
  return (
    <div className='profile-container'>
        <h1 className='greetings'>
            Hello, {name}
            {/* {JSON.stringify(user, null, 2)} */}
        </h1>
        <h4>This page will show user info when logged in :)</h4>
    </div>
    )
}
export default Profile;