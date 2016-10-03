import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import { sidebarReducer as sidebar } from './sidebar';
import { timerReducer as timer } from './timer';

const rootReducer = combineReducers({
  sidebar,
  timer,
  formReducer,
  routing
});

export default rootReducer;
