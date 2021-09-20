import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Navbar} from './components/Navbar';
import {About} from './pages/About';
import {Home} from './pages/Home';
import { SearchResults } from './pages/SearchResults';
import {Provider} from 'react-redux';
import store from './redux/reducers/index';

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
          <Switch>
            <Route path={'/'} exact component = {Home} />
            <Route path={'/results'} exact component = {SearchResults} />
            <Route path={'/about'} exact component = {About} />
          </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
