import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import TimerPage from './containers/TimerPage';
import ProjectsPage from './containers/ProjectsPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/timer" component={TimerPage} />
    <Route path="/projects">
      <IndexRoute component={ProjectsPage} />
    </Route>
  </Route>
);
