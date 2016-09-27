import React, { Component, PropTypes } from 'react';
import styles from './Timer.css';
import { formatTime } from '../../utils/helpers';

export class Time extends Component {
  componentDidMount() {
    this.interval = setInterval(() => this.props.startTime(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { timeAllow } = this.props;
    return (
      <h1 className={styles.time}>{formatTime(timeAllow)}</h1>
    );
  }
}

Time.propTypes = {
  timeAllow: PropTypes.number,
  startTime: PropTypes.func
};
