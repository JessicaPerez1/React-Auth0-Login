import React from 'react'
import { useAuth0, withAuthenticationRequired  } from '@auth0/auth0-react'
import Loading from '../components/Loading'

import './Profile.scss';

const Profile = () => {
  const { user } = useAuth0();
  const { name } = user;
  return (
    <div className='main-content'>
        <h1 className='greetings'>
            Hello, {name}
        </h1>
        <h4>This page will sho when logged in :)</h4>
    </div>
    )
}

export default withAuthenticationRequired(Profile, {
  onRedirecting: () => <Loading />,
});