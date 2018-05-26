import React, { Fragment } from 'react';
import { Provider } from 'unistore/react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { store } from './store/store';
// Components
import Main from './Main';
import Chat from './components/Chat';
import Header from './components/Header';
import Matches from './components/Matches';
// Styles
import './index.css';

export default () => (
  <Provider store={store}>
    <Router>
      <div className="app">
        <Header />
        <main>
          <Route exact path="/" component={Main} />
          <Route exact path="/matches" component={Matches} />
          <Route path="/matches/:id" component={Chat} />
        </main>
      </div>
    </Router>
  </Provider>
);
