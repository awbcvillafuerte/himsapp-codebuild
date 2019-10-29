import React from 'react';

// import { IAppSidebar } from './IAppSidebar';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faUsers,
  faFileSignature,
  faTasks,
  faTable,
  faFolderOpen,
  faBookOpen,
} from '@fortawesome/free-solid-svg-icons';

const useStyles = makeStyles(() => ({
  sideBar: {
    width: '72px',
  },
  listItem: {
    flexDirection: 'column',
  },
  listItemIcon: {
    minWidth: 0,
  },
  avatar: {
    backgroundColor: 'rgba(158, 164, 172, 0.18)',
  },
  listItemText: {
    fontSize: 9,
    color: '#ffffff',
  },
  icon: {
    color: 'white',
  },
  divider: {
    backgroundColor: 'transparent',
    height: '50px',
  },
}));

const AppSidebar = (/* props: ISideBar.IProps */): JSX.Element => {
  const classes = useStyles();

  const handleDashboardOnClick = () => {};

  return (
    <div className={classes.sideBar}>
      <List>
        <ListItem
          button
          className={classes.listItem}
          onClick={handleDashboardOnClick}
        >
          <ListItemIcon className={classes.listItemIcon}>
            <Avatar className={classes.avatar}>
              <FontAwesomeIcon icon={faHome} />
            </Avatar>
          </ListItemIcon>
          <ListItemText
            primary="Dashboard"
            disableTypography
            className={classes.listItemText}
          />
        </ListItem>
        <ListItem button className={classes.listItem}>
          <ListItemIcon className={classes.listItemIcon}>
            <Avatar className={classes.avatar}>
              <FontAwesomeIcon icon={faUsers} />
            </Avatar>
          </ListItemIcon>
          <ListItemText
            primary="Clients"
            disableTypography
            className={classes.listItemText}
          />
        </ListItem>
        <ListItem button className={classes.listItem}>
          <ListItemIcon className={classes.listItemIcon}>
            <Avatar className={classes.avatar}>
              <FontAwesomeIcon icon={faFileSignature} />
            </Avatar>
          </ListItemIcon>
          <ListItemText
            primary="Proposals"
            disableTypography
            className={classes.listItemText}
          />
        </ListItem>
        <ListItem button className={classes.listItem}>
          <ListItemIcon className={classes.listItemIcon}>
            <Avatar className={classes.avatar}>
              <FontAwesomeIcon icon={faTasks} />
            </Avatar>
          </ListItemIcon>
          <ListItemText
            primary="Tickets"
            disableTypography
            className={classes.listItemText}
          />
        </ListItem>
        <ListItem button className={classes.listItem}>
          <ListItemIcon className={classes.listItemIcon}>
            <Avatar className={classes.avatar}>
              <FontAwesomeIcon icon={faTable} />
            </Avatar>
          </ListItemIcon>
          <ListItemText
            primary="Reports"
            disableTypography
            className={classes.listItemText}
          />
        </ListItem>
        <ListItem button className={classes.listItem}>
          <ListItemIcon className={classes.listItemIcon}>
            <Avatar className={classes.avatar}>
              <FontAwesomeIcon icon={faFolderOpen} />
            </Avatar>
          </ListItemIcon>
          <ListItemText
            primary="Templates"
            disableTypography
            className={classes.listItemText}
          />
        </ListItem>
        <Divider className={classes.divider} />
        <ListItem button className={classes.listItem}>
          <ListItemIcon className={classes.listItemIcon}>
            <Avatar className={classes.avatar}>
              <FontAwesomeIcon icon={faBookOpen} />
            </Avatar>
          </ListItemIcon>
          <ListItemText
            primary="Help"
            disableTypography
            className={classes.listItemText}
          />
        </ListItem>
      </List>
    </div>
  );
};

export default AppSidebar;
