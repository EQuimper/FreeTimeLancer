import React, { PropTypes } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

const styles = {
  root: {
    width: 250
  }
};

export const SideBar = ({ sidebarState, sidebarActions }) =>
  <Drawer
    open={sidebarState}
    style={styles.root}
    docked={false}
    onRequestChange={() => sidebarActions.toggleSidebarAction()}
  >
    <MenuItem>Menu Item</MenuItem>
    <MenuItem>Menu Item 2</MenuItem>
  </Drawer>;

SideBar.propTypes = {
  sidebarState: PropTypes.bool,
  sidebarActions: PropTypes.func
};
