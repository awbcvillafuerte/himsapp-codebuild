import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';

import AppHeader from '../AppHeader';
import AppSidebar from '../AppSidebar';
import { IAuthenticatedLayout } from './IAuthenticatedLayout';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: '72px',
      flexShrink: 0,
    },
  },
  drawerPaper: {
    backgroundColor: '#1e2071',
  },
  content: {
    flexGrow: 1,
    padding: `0 ${theme.spacing(5)}px`,
  },
  toolbar: theme.mixins.toolbar,
}));

const AuthenticatedLayout = (
  props: IAuthenticatedLayout.IProps,
): JSX.Element => {
  const classes = useStyles();

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className={classes.root}>
      <AppHeader
        logoImage="static/intellicare.png"
        userImage="static/user.jpg"
        badgeCount={8}
        menuOnClick={handleDrawerToggle}
      />
      <nav className={classes.drawer}>
        <Hidden smUp implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
          >
            <AppSidebar />
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            <AppSidebar />
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.children}
      </main>
    </div>
  );
};

export default AuthenticatedLayout;
