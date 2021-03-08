// import { combineReducers } from 'redux'
// import authReducer from './authReducer'
// import messageReducer from './messageReducer'

// export default combineReducers({
//     authReducer,
//     messageReducer
// });

// import { LOGIN, LOGOUT, SET_CURRENT_USER } from '../actions/actionTypes';

// const initialUserdata = JSON.parse(localStorage.getItem('user')) || null;
// const INITIAL_STATE = {
//   isAuthenticated: false,
//   initialUserdata
// };


// export default function useReducer(state = INITIAL_STATE, action){
//   switch(action.type) {
//     case SET_CURRENT_USER:
//       return {
//         // turn an empty object into false or an object with keys to be true
//         isAuthenticated: !!(Object.keys(action.user).length),
//         user: action.user
//       };
//     default:
//       return state;
//   }
// }

