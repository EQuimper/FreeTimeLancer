import React from 'react';
import { Link } from 'react-router';
import { List, ListItem } from 'material-ui/List';

// Icons
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import TimerIcon from 'material-ui/svg-icons/image/timer';
import HomeIcon from 'material-ui/svg-icons/action/home';

const styles = {
  menu: {
    marginTop: 40
  }
};

export const ListProjectsSidebar = () =>
  <List style={styles.menu}>
    <Link to="/">
      <ListItem
        primaryText="Home"
        leftIcon={<HomeIcon />}
      />
    </Link>
    <Link to="/timer">
      <ListItem
        primaryText="Timer"
        leftIcon={<TimerIcon />}
      />
    </Link>
    <Link to="/projects">
      <ListItem
        primaryText="List of Projects"
        leftIcon={<ContentInbox />}
        primaryTogglesNestedList
      />
    </Link>
  </List>;
