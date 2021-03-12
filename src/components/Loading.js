import React from 'react';
import loading from '../assets/loading.gif';

import './Loading.scss';

const Loading = () => {
    return(
        <div className='loading-gif'>
            <h1>Loading...</h1>
            <img 
            src={loading}
            alt='loading gif'/>
        </div>
    )
}

export default Loading