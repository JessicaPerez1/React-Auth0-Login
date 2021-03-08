import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const Login = () => {

    const { loginWithRedirect } = useAuth0();

    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');

    // const onChangeUsername = (event) => {
    //   const username = event.target.value;
    //   setUsername(username);
    // };

    // const onChangePassword = (event) => {
    //   const password = event.target.value;
    //   setPassword(password);
    // };

    // const handleSubmit = (e ) => {
    //   e.preventDefault();
    //     return login(username, password).then((res) => {
    //         history.push('/products')
    //       },
    //       (err) => {
    //         debugger
    //       })  
    // };

    return (
        <div className="login-container">
            {/* <form
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
                </div> */}
            <button
                type='button'
                className='form-control-btn'
                onClick ={() => loginWithRedirect()}
                > LOGIN
            </button>
        {/* </form> */}
        </div>
    )
}

// Login.propTypes = {
//   login: PropTypes.func.isRequired
// }

export default Login;