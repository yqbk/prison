import React from 'react';
import { Provider } from 'unistore/react';
import { store } from './store/store';

import Main from './Main';

export default () => (
  <Provider store={store}>
    <Main />
  </Provider>
);
