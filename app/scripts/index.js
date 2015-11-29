'use strict';

import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';
import {render} from 'react-dom'

import App from './components/app';
import Home from './components/home';
import Play from './components/play';

render((
  <Router>
    <Route path='/' component={App}>
      <IndexRoute component={Home}/>
      <Route path="play" component={Play}/>
    </Route>
  </Router>
), document.getElementById('container'))
