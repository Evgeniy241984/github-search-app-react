import { ActionTypes } from "../constants/actionTypes"

const initialState = {
    repositories: [],
    isFetching: true,
}

export const reposReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_REPOSITORIES: 
            return { ...state, repositories: payload };
        default: 
            return state;
    }
}