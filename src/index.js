import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";

import AppRouter from './App'
import * as serviceWorker from './serviceWorker';
import ScrollToTop from './components/ScrollToTop';
import './index.css';

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
ReactDOM.render(
  <Router>
    <ScrollToTop>
      <div>
        <AppRouter routes={AppRouter} />
      </div>
    </ScrollToTop>
  </Router >
  ,
  document.getElementById( 'root' ) );
serviceWorker.unregister();
