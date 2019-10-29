import React, { FC, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import ChipInput from 'material-ui-chip-input';

import { IChipTextField } from './IChipTextField';

const labelColor = 'rgb(21,28,28)';
const grayColor = 'rgba(39,52,76,0.3)';
const grayColorFocused = 'rgba(39,52,76,0.5)';
const borderCss = {
  borderColor: grayColor,
  borderRadius: 5,
};

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  label: {},
  textField: {
    '& label.Mui-focused': {
      color: labelColor,
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: grayColor,
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': borderCss,
      '&:hover fieldset': borderCss,
      '&.Mui-focused fieldset': {
        ...borderCss,
        borderColor: grayColorFocused,
      },
    },
    '&': {
      marginTop: theme.spacing(1),
      backgroundColor: 'white',
      width: '100%',
    },
  },
}));

export const InputChipTextField: FC<IChipTextField.IProps> = (
  props: IChipTextField.IProps,
) => {
  const classes = useStyles();
  const [currentValue, setcurrentValue] = useState<any[]>(props.value || []);

  const onChange = (chips: any[]) => {
    setcurrentValue(chips);

    if (props.onChange) {
      props.onChange(chips);
    }
  };

  return (
    <FormControl className={classes.root}>
      <Typography className={classes.label} color="textPrimary">
        {props.label}
      </Typography>
      <ChipInput
        id={props.id}
        className={classes.textField}
        defaultValue={currentValue}
        onChange={onChange}
        error={props.error}
        variant="outlined"
      />
    </FormControl>
  );
};

InputChipTextField.defaultProps = {
  label: '',
  value: [],
  error: false,
  multiline: false,
  rows: 1,
  onChange: (chips: any[]) => {
    console.log(chips);
  },
};
