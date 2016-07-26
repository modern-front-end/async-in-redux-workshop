import 'babel-polyfill';
import './index.css';
import React        from 'react';
import { render }   from 'react-dom';
import { Provider } from 'react-redux';
import store        from 'store';
import App          from './containers/app';

const provider = <Provider store={store}>
  <App />
</Provider>

render(provider, document.getElementById('root'));
