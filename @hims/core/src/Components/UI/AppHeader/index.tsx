import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';

import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import { IAppHeader } from './IAppHeader';

const useStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: '#ffffff',
    color: '#808080',
    [theme.breakpoints.up('sm')]: {
      width: 'calc(100% - 72px)',
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  logo: {
    height: '40px',
  },
  badge: {
    backgroundColor: '#ff6969',
    color: '#ffffff',
    fontWeight: 700,
  },
  grow: {
    flexGrow: 1,
  },
}));

const AppHeader = (props: IAppHeader.IProps): JSX.Element => {
  const classes = useStyles();

  const handleMenuOnClick = () => {
    if (props.menuOnClick) {
      props.menuOnClick();
    }
  };

  const handleNotificationOnClick = () => {
    if (props.notificationOnClick) {
      props.notificationOnClick();
    }
  };

  const handleUserOnClick = () => {
    if (props.userOnClick) {
      props.userOnClick();
    }
  };

  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          onClick={handleMenuOnClick}
        >
          <MenuIcon />
        </IconButton>
        <Link href="/">
          <img src={props.logoImage} className={classes.logo} alt="logo" />
        </Link>
        <div className={classes.grow} />
        <IconButton onClick={handleNotificationOnClick}>
          <Badge
            badgeContent={props.badgeCount}
            classes={{
              badge: classes.badge,
            }}
          >
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton edge="end" onClick={handleUserOnClick}>
          <Avatar src={props.userImage} alt="avatar" />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

AppHeader.defaultProps = {
  badgeCount: 0,
};

AppHeader.propTypes = {
  badgeCount: PropTypes.number,
};

export default AppHeader;
