import { LOCATION_CHANGE } from 'react-router-redux';
import * as types from '../../app/actions/actionTypes';

export const sidebarReducer = (state = false, action) => {
  switch (action.type) {
    case types.TOGGLE_SIDEBAR:
      return !state;
    case LOCATION_CHANGE:
      return false;
    default:
      return state;
  }
};
