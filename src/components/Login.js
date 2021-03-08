import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { useHistory, withRouter } from 'react-router-dom';

// import Form from 'react-validation/build/form';
// import Input from 'react-validation/build/input';
// import CheckButton from 'react-validation/build/button';

import { login } from '../actions/index'

const Login = ({ login }) => {
    const history = useHistory();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onChangeUsername = (event) => {
      const username = event.target.value;
      setUsername(username);
    };

    const onChangePassword = (event) => {
      const password = event.target.value;
      setPassword(password);
    };

    const handleSubmit = (e ) => {
      e.preventDefault();
        return login(username, password).then((res) => {
            history.push('/products')
          },
          (err) => {
            debugger
          })  
    };

    return (
        <div className="login-container">
            <form
            className='login-form' onSubmit={handleSubmit}
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
            <button
                type='button'
                className='form-control-btn'
                > LOGIN
            </button>
        </form>
        </div>
    )
}

Login.propTypes = {
  login: PropTypes.func.isRequired
}

export default withRouter(connect(null, { login })(Login));