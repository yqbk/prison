import React, { Fragment } from 'react';
import { Provider } from 'unistore/react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { store } from './store/store';
// Components
import Header from './components/Header';
import Footer from './components/Footer';
import Chat from './components/Chat';
import Main from './Main';
// Styles
import './index.css';

export default () => (
  <Provider store={store}>
    <Router>
      <div className="app">
        <Header />
        <main>
          <Route exact path="/" component={Main} />
          <Route path="/chat" component={Chat} />
        </main>
        <Footer />
      </div>
    </Router>
  </Provider>
);
