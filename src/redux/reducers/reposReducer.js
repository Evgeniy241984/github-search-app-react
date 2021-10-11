import { ActionTypes } from "../constants/actionTypes"

const initialState = {
    repositories: [],
    isFetching: false,
}

export const reposReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_REPOSITORIES: 
            return { 
                ...state, 
                repositories: payload,
                isFetching: false 
            };
        case ActionTypes.SET_IS_FETCHING: 
            return {
                ...state,
                isFetching: payload
            };
        default: 
            return state;
    }
}