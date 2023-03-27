
import React from 'react';
import { Provider } from 'react-redux';
import Root from './Root';
import store from './store/configureStore';

const Setup = () => {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
}

export default Setup;
