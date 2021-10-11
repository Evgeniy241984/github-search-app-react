import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import {Navbar} from './components/Navbar';
import {SplashScreen} from './pages/SplashScreen';
import {About} from './pages/About';
import {MainSearch} from './pages/MainSearch';
import store from './redux/reducers/index';

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar/>
          <Switch>
            <Route path={'/'} exact component = {SplashScreen} />
            <Route path={'/about'} exact component = {About} />
            <Route path={'/main-search'} exact component = {MainSearch} />
          </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
