import { ActionTypes } from "../constants/actionTypes"

const initialState = {
    repositories: [],
    isFetching: false,
    nothingWasFound: false,
}

export const reposReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_REPOSITORIES: 
            return { 
                ...state, 
                repositories: payload,
                isFetching: false,
                nothingWasFound: false,
            };
        case ActionTypes.SET_IS_FETCHING: 
            return {
                ...state,
                isFetching: payload,
            };
        case ActionTypes.SET_NOTHING_WAS_FOUND:
            return {
                ...state,
                nothingWasFound: payload,
            };
        default: 
            return state;
    }
}