import * as React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

interface ClientInfoItemProps {
  name?: string;
  value?: string;
  nameFontSize?: number;
  valueFontSize?: number;
}

const useStyles = makeStyles({
  root: {
    padding: '5px 5px',
  },
  name: (props: any) => ({
    fontSize: props.nameFontSize,
    color: 'rgba(39, 46, 76, 0.6)',
  }),
  value: (props: any) => ({
    fontSize: props.valueFontSize,
    color: 'rgb(39, 46, 76)',
  }),
});

const ClientInfoItem: React.FC<ClientInfoItemProps> = (
  props: ClientInfoItemProps,
): JSX.Element => {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <Typography className={classes.name}>{props.name}</Typography>
      <Typography className={classes.value}>{props.value}</Typography>
    </div>
  );
};

ClientInfoItem.defaultProps = {
  nameFontSize: 12,
  valueFontSize: 16,
};

export default ClientInfoItem;
