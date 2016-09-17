import React, { PropTypes } from 'react';
import Drawer from 'material-ui/Drawer';

import { ListProjectsSidebar } from '../../components/ListProjectsSidebar';

export const SideBar = ({ sidebarState, sidebarActions }) =>
  <Drawer
    // width={200}
    open={sidebarState}
    docked={false}
    onRequestChange={() => sidebarActions.toggleSidebarAction()}
  >
    <ListProjectsSidebar />
  </Drawer>;

SideBar.propTypes = {
  sidebarState: PropTypes.bool,
  sidebarActions: PropTypes.object
};
