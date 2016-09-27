import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/timer';
import { Timer } from '../../app/components/Timer/Timer';

const mapState = state => ({ timerState: state.timer });

const mapDispatch = dispatch => ({ timerActions: bindActionCreators(actions, dispatch) });

export default connect(mapState, mapDispatch)(Timer);
