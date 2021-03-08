import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

import './profileStyle.css';

const Profile = () => {

    const { user, isAuthenticated } = useAuth0();

    return (
        <React.Fragment>
            {/* only show the content below IF the IS authenticated */}
        { isAuthenticated && 
         <div className='profile-container'>
             Welcome {JSON.stringify(user.nickname)}
              {/* {JSON.stringify(user, null, 2)} */}
          </div>
        }  
        </React.Fragment>
    )
}
export default Profile;