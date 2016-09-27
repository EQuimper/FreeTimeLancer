import moment from 'moment';

export const formatTime = time => moment.duration(time, 'seconds').format('hh:mm:ss');
