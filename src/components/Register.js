import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { register } from '../actions/index';
import { withRouter, useHistory } from 'react-router-dom';

const Register = ( {signup} ) => {
    const history = useHistory();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const onChangeUsername = (event) => {
      const username = event.target.value;
      setUsername(username);
    };

    const onChangePassword = (event) => {
      const password = event.target.value;
      setPassword(password);
    };

    const onChangeEmail = (event) => {
      const email = event.target.value;
      setEmail(email);
    };

    const handleSubmit = (e) => {
      e.preventDefault();
          return register(username, password, email).then((res) => {
            history.push('/products')
          },
          (err) => {
            debugger
          })  
    };
    return (
      <div className='register-container'>
        <form
        className='register-form' onSubmit={handleSubmit}
        >
          <div className='form-control'>
            <input
            className='userName-input'
            required
            type='text'
            placeholder='username'
            value={username}
            onChange={onChangeUsername}
            />
            </div>
            <div className='form-control'>
              <input
              className='password-input'
              required
              type='password'
              placeholder='password'
              value={password}
              onChange={onChangePassword}
              />
            </div>
            <div className='form-control'>
              <input
               className='email-input'
               required
               type='email'
               placeholder='email'
              value={email}
               onChange={onChangeEmail}
               />
            </div>
          
        </form>
      </div>
    )
}
Register.propTypes = {
  signup: PropTypes.func.isRequired
};

export default withRouter(connect(null, { register })(Register));
// export default Register