import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import TimerPage from './containers/TimerPage';
import NewTimerPage from './containers/NewTimerPage';
import ProjectsPage from './containers/ProjectsPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/timer">
      <IndexRoute component={TimerPage} />
      <Route path="/timer/new" component={NewTimerPage} />
    </Route>
    <Route path="/projects">
      <IndexRoute component={ProjectsPage} />
    </Route>
  </Route>
);
