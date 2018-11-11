import React, { Component } from 'react';
import { Provider } from 'react-redux';

import './App.css';
import Header from './components/Header';
import store from './store.js';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Header />
      </Provider>
    );
  }
}

export default App;
