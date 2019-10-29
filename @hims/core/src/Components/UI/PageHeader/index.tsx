import * as React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#ffffff',
    padding: '10px',
  },
  gridContainer: {
    height: '100px',
  },
  breadCrumbs: {
    marginBottom: '10px',
  },
  headerTitle: {
    fontSize: 25,
  },
  linkPrevious: {
    fontSize: 12,
    fontWeight: 300,
    color: 'black',
    cursor: 'pointer',
  },
  linkCurrent: {
    fontSize: 12,
    color: 'black',
    cursor: 'pointer',
  },
});

const PageHeader = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        justify="space-between"
        alignItems="center"
        className={classes.gridContainer}
      >
        <Grid item>
          <Breadcrumbs className={classes.breadCrumbs}>
            <Link className={classes.linkPrevious}>CLIENTS</Link>
            <Link className={classes.linkCurrent}>
              HAPPY INNOVATIVE TECHNOLOGIES, INC.
            </Link>
          </Breadcrumbs>
          <Typography className={classes.headerTitle}>
            Happy Innovative Technologies, Inc.
          </Typography>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary">
            Edit Client
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default PageHeader;
