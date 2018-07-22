import React from 'react';
import { Provider } from 'react-redux';

import Store from './configs/store';
import Routes from './configs/routes';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={ Store }>
        <Routes />
      </Provider>
    );
  }
}
