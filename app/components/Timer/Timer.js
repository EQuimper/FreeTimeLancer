import React, { PropTypes } from 'react';
import styles from './Timer.css';
import { formatTime } from '../../utils/helpers';
import { red, blue } from '../../utils/colors';

import { Time } from './Time';

const iStyle = {
  notActive: {
    backgroundColor: red
  },
  active: {
    backgroundColor: blue
  }
};

export const Timer = ({
  timerState: { timeAllow, isOn },
  timerActions: { timerOn, startTime, stopTime }
}) =>
  <div className={styles.container}>
    {isOn ? (
      <div
        className={styles.circle}
        style={iStyle.active}
        onClick={() => stopTime()}
      >
        <Time timeAllow={timeAllow} startTime={startTime} />
      </div>
    ) : (
      <div
        onClick={() => timerOn()}
        className={styles.circle}
        style={iStyle.notActive}
      >
        <h1 className={styles.time}>{formatTime(timeAllow)}</h1>
      </div>
    )}
  </div>;

Timer.propTypes = {
  timerState: PropTypes.object,
  timerActions: PropTypes.object
};
