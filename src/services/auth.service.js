import axios from 'axios';

const API_URL = 'http://localhost:3000/api/auth/';

//register post request
const register = (username, email, password) => {
    return axios.post(API_URL + 'signup', {
        username,
        email,
        password
    });
};
//login post request
const login = (username, password) => {
    return axios.post(API_URL + 'signin', {
        username,
        password
    }).then((response) => {
    if (response.data.accessToken) {
        localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
});
};
    // if token exists, save to localStorage

//when logout, remove from localstorage
const logout = () => {
    localStorage.removeItem('user')
};
export {
    register,
    login,
    logout
}