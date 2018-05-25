/**
 * Created by a on 2018/5/25.
 */
import React from 'react';

import {BrowserRouter as Router , Route, Switch, Link} from 'react-router-dom';
import Home from '../pages/Home';
import Page from '../pages/Page';

export default (
  <Router>
    <div>
    <ul>
      <li><Link to="/">home</Link></li>
      <li><Link to="/page">Page</Link></li>
    </ul>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/page" component={Page}/>
    </Switch>
    </div>
  </Router>
)