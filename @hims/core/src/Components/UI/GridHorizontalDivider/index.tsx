import * as React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

interface GridHorizontalDividerProps {
  height?: string;
}

const useStyles = makeStyles({
  grid: (props: any) => ({
    height: props.height,
  }),
});

const GridHorizontalDivider: React.FC<GridHorizontalDividerProps> = (
  props: GridHorizontalDividerProps,
): JSX.Element => {
  const classes = useStyles(props);

  return <Grid item xs={12} className={classes.grid} />;
};

GridHorizontalDivider.defaultProps = {
  height: '10px',
};

GridHorizontalDivider.propTypes = {
  height: PropTypes.string,
};

export default GridHorizontalDivider;
