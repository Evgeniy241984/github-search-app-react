 import { ActionTypes } from "../constants/actionTypes"   
 
 export const setRepositories = (repositories) => {
     return {
        type: ActionTypes.SET_REPOSITORIES,
        payload: repositories,
     }
 };

 export const setIsFetching = (bool) => {
     return {
         type: ActionTypes.SET_IS_FETCHING,
         payload: bool,
     }
};

export const setNothingWasFound = (bool) => {
    return {
        type: ActionTypes.SET_NOTHING_WAS_FOUND,
        payload: bool,
    }
}