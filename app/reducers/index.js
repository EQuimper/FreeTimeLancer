import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { sidebarReducer as sidebar } from './sidebar';

const rootReducer = combineReducers({
  sidebar,
  routing
});

export default rootReducer;
