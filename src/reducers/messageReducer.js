import { setAlert, clearAlert } from '../actions/messageActions';

const initialState = {};

export default function messageReducer(state= initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case setAlert:
            return { message: payload};

        case clearAlert:
            return { message: ''};

        default:
            return state
    }
}

