import { SET_ALERT, CLEAR_ALERT } from './actionTypes'

export const setAlert = ( message) => ({
    type: SET_ALERT,
    payload: message
});

export const clearAlert = () => ({
    type: CLEAR_ALERT
});