import React, { PropTypes } from 'react';
import IconButton from 'material-ui/IconButton';
import NavIcon from 'material-ui/svg-icons/navigation/menu';

const styles = {
  iconContainer: {
    width: 80,
    height: 80
  },
  icon: {
    width: 40,
    height: 40
  }
};

export const NavBar = ({ sidebarActions }) =>
  <IconButton
    onTouchTap={() => sidebarActions.toggleSidebarAction()}
    style={styles.iconContainer}
    iconStyle={styles.icon}
  >
    <NavIcon color="#ffffff" />
  </IconButton>;

NavBar.propTypes = {
  sidebarActions: PropTypes.object
};
