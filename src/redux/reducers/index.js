import {combineReducers} from 'redux';
import {createStore} from 'redux';
import {reposReducer} from './reposReducer';

const rootReducer = combineReducers({
    allGitHubRepos: reposReducer,
})

const store = createStore(rootReducer, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );

export default store;