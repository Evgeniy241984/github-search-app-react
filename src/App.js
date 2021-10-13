import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import {Header} from './components/Header';
import {SplashScreen} from './pages/SplashScreen';
import {About} from './pages/About';
import {MainSearch} from './pages/MainSearch';
import store from './redux/reducers/index';

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header/>
        <div className="page__container">
          <Switch>
            <Route path={'/github-search-app-react/'} exact component = {SplashScreen} />
            <Route path={'/about'} exact component = {About} />
            <Route path={'/main-search'} exact component = {MainSearch} />
          </Switch>
        </div> 
      </BrowserRouter>
    </Provider>
  );
}

export default App;
