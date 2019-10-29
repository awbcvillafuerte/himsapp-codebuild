import React, { FC, ChangeEvent } from 'react';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import { ITextField } from './ITextField.d';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  label: {
    fontSize:'.8em'
  },
  textField: {
    marginTop: theme.spacing(1),
    backgroundColor: 'white',
  },
}));

const labelColor = 'rgb(21,28,28)';
const grayColor = 'rgba(39,52,76,0.3)';
const grayColorFocused = 'rgba(39,52,76,0.5)';
const borderCss = {
  borderColor: grayColor,
  borderRadius: 5,
};
const StyledTextField = withStyles({
  root: {
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
  },
})(TextField);

export const InputTextField: FC<ITextField.IProps> = (
  props: ITextField.IProps,
) => {
  const classes = useStyles();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (props.onChange) {
      props.onChange(value);
    }
  };

  return (
    <div className={classes.root}>
      { props.label ? <InputLabel
        htmlFor={props.id}
        className={classes.label}
        color="textPrimary"
      >
        {props.label}
      </InputLabel> : null }
      <StyledTextField
        id={props.id}
        className={classes.textField}
        value={props.value}
        onChange={onChange}
        error={props.error}
        multiline={props.multiline}
        rows={props.rows}
        type={props.type}
        variant="outlined"
      />
    </div>
  );
};

InputTextField.defaultProps = {
  type: 'text',
  value: '',
  error: false,
  multiline: false,
  rows: 1,
  onChange: (value: string) => {
    console.log(`InputTextField.defaultProps - Value: ${value}`);
  },
};
