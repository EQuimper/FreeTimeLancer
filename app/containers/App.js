import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavBar } from '../components/layout/NavBar';
import { SideBar } from '../components/layout/SideBar';
import { RightSideBar } from '../components/layout/RightSideBar';

import * as actions from '../../app/actions/sidebar';

const App = ({ children, sidebarState, sidebarActions }) =>
  <div>
    <NavBar sidebarActions={sidebarActions} />
    <SideBar sidebarState={sidebarState} sidebarActions={sidebarActions} />
    <div className="app-container">
      {children}
    </div>
    <div className="right-side">
      <RightSideBar />
    </div>
  </div>;

const mapState = state => ({ sidebarState: state.sidebar });

const mapDispath = dispatch => ({ sidebarActions: bindActionCreators(actions, dispatch) });

App.propTypes = {
  children: PropTypes.element.isRequired,
  sidebarState: PropTypes.bool,
  sidebarActions: PropTypes.object
};

export default connect(mapState, mapDispath)(App);
