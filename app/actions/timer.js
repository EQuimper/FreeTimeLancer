import * as types from './actionTypes';

export const startTime = () => ({ type: types.START_TIMER });

export const stopTime = () => ({ type: types.STOP_TIMER });

export const timerOn = () => ({ type: types.TIMER_ON });
