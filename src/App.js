import React from 'react';
import { Provider } from 'react-redux';

import store from './configs/store';

import SignIn from './screens/SignIn'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <SignIn />
      </Provider>
    );
  }
}
