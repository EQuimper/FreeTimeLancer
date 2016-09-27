import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { sidebarReducer as sidebar } from './sidebar';
import { timerReducer as timer } from './timer';

const rootReducer = combineReducers({
  sidebar,
  timer,
  routing
});

export default rootReducer;
