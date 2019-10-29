import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    margin: '2em auto',
    width: '40px',
    height: '40px',
    position: 'relative',
  }
});

const Wrapper: React.FC = (props): JSX.Element => {
  const classes = useStyles();
  return (<div className={classes.root} {...props} />);
}

export default Wrapper;
