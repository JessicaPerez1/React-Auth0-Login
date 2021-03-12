import React from 'react';
import loading from '../assets/loading.gif';

import './Loading.scss';

const Loading = () => {
    return(
        <div className='gif-container'>
            <h1>Loading...</h1>
            <img 
              className='loading-gif'
              src={loading}
              alt='loading gif'/>
        </div>
    )
}

export default Loading;