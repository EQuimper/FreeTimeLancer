import * as types from '../../app/actions/actionTypes';

export const sidebarReducer = (state = false, action) => {
  switch (action.type) {
    case types.TOGGLE_SIDEBAR:
      return !state;
    default:
      return state;
  }
};
