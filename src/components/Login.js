import React, { useState, useRef } from 'react'
import { useDispatch, useSelector } from "react-redux";

// import Form from 'react-validation/build/form';
// import Input from 'react-validation/build/input';
// import CheckButton from 'react-validation/build/button';

import { register, login } from '../actions/authActions'

const Login = () => {
    const userNameRef = useRef();
    const passwordRef = useRef();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [successful, setSuccessful] = useState(false)
    const [loading, setLoading] = useState(false);

    const [isMember, setMember] = useState(true);
    
    const { isLoggedIn } = useSelector(state => state.authReducer);
    const { message } = useSelector(state => state.messageReducer);

    const dispatch = useDispatch();

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

      setLoading(true);
    };

    return (
        <div className="login-container">
            {/* h1 is SIGN IN if its an existing member, it's REGISTER if not a member yet */}
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
                
            </form>
        </div>
    )
}

export default Login