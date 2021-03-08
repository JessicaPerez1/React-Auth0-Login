// import axios from 'axios';
// import jwtDecode from 'jwt-decode';

// import {REGISTER, LOGIN, LOGOUT, SET_ALERT, CLEAR_ALERT, SET_CURRENT_USER} from './actionTypes'

// const BASE_URL = 'http://localhost:3000/';

// export const setAuthorizationToken = (token) => {
//   if (token) {
//     axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//   } else {
//     delete axios.defaults.headers.common['Authorization'];
//   }
// }

// export const register = (userData) => {
//   return dispatch => {
//       console.log('USER DATA', userData)
//     return axios.post(`${BASE_URL}/api/users/`, userData);
//   }
// }

// export const logout= () => {
//   return dispatch => {
//     localStorage.removeItem('jwtToken');
//     setAuthorizationToken(false);
//     dispatch(setCurrentUser({}));
//   }
// }

// export const login = (data) => {
//   return dispatch => {
//     return axios.post(`${BASE_URL}/api/users/auth`, data).then(res => {
//         console.log('DATEEEEEE', data)
//       const token = res.data;
      
//       localStorage.setItem('jwtToken', token);
//       console.log('TOKEN', token)
//       setAuthorizationToken(token);
//       dispatch(setCurrentUser(jwtDecode(token)));
//     });
//   }
// }

// export const setCurrentUser = (user) => {
//   return {
//     type: SET_CURRENT_USER,
//     user
//   };
// }