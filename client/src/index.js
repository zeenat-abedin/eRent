import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-oldschool-dark'
import store from './redux/store';

import './index.scss';

const options = {
  position: positions.MIDDLE_RIGHT,
  timeout: 5000,
  offset: '30px',
  transition: transitions.SCALE
}

ReactDOM.render(<Provider store={store}>
  <Router>
    <AlertProvider template={AlertTemplate} {...options}>
      <App />
    </AlertProvider>
  </Router>

</Provider>, document.getElementById('root'));

serviceWorker.register();
