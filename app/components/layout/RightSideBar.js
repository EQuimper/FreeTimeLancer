import React from 'react';
import { Link } from 'react-router';
import FloatingActionButton from 'material-ui/FloatingActionButton';

// Icons
import ContentAdd from 'material-ui/svg-icons/content/add';
import TimerIcon from 'material-ui/svg-icons/image/timer';

import css from './RightSideBar.css';

export const RightSideBar = () =>
  <div className={css.container}>
    <Link>
      <FloatingActionButton>
        <ContentAdd />
      </FloatingActionButton>
    </Link>
    <Link to="/timer">
      <FloatingActionButton secondary>
        <TimerIcon />
      </FloatingActionButton>
    </Link>
  </div>;
