import * as types from '../actions/actionTypes';

const initialState = {
  timeAllow: 1500,
  isOn: false
};

export const timerReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.START_TIMER:
      return {
        ...state,
        timeAllow: state.timeAllow - 1,
      };
    case types.TIMER_ON:
      return {
        ...state,
        isOn: !state.isOn
      };
    case types.STOP_TIMER:
      return {
        ...state,
        isOn: false
      };
    default:
      return state;
  }
};
