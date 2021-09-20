 import { ActionTypes } from "../constants/actionTypes"   
 
 export const setRepositories = (repositories) => {
     return {
        type: ActionTypes.SET_REPOSITORIES,
        payload: repositories,
     }
 };