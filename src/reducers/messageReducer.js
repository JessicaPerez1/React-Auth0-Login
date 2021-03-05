import { SET_ALERT, CLEAR_ALERT } from '../actions/messageActions';

const initialState = {};

export default function messageReducer (state= initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case SET_ALERT:
            return { message: payload};

        case CLEAR_ALERT:
            return { message: ''};

        default:
            return state
    }
}

