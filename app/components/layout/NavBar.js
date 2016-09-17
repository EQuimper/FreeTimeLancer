import React, { PropTypes } from 'react';
import IconButton from 'material-ui/IconButton';
import NavIcon from 'material-ui/svg-icons/navigation/menu';

export const NavBar = ({ sidebarActions }) =>
  <IconButton onTouchTap={() => sidebarActions.toggleSidebarAction()}>
    <NavIcon color="#ffffff" />
  </IconButton>;

NavBar.propTypes = {
  sidebarActions: PropTypes.func
};
