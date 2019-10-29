import React, { FC, HTMLAttributes } from 'react';
import Select from 'react-select';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import NoSsr from '@material-ui/core/NoSsr';
import FormControl from '@material-ui/core/FormControl';
import TextField, { BaseTextFieldProps } from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import { ValueContainerProps } from 'react-select/src/components/containers';
import { ControlProps } from 'react-select/src/components/Control';
import { MenuProps, NoticeProps } from 'react-select/src/components/Menu';
import { OptionProps } from 'react-select/src/components/Option';
import { PlaceholderProps } from 'react-select/src/components/Placeholder';
import { SingleValueProps } from 'react-select/src/components/SingleValue';
import { ValueType } from 'react-select/src/types';
import { Omit } from '@material-ui/types';

import { IAutocomplete } from './IAutocomplete.d';

const labelColor = 'rgb(21,28,28)';
const grayColor = 'rgba(39,52,76,0.3)';
const grayColorFocused = 'rgba(39,52,76,0.5)';
const borderCss = {
  borderColor: grayColor,
  borderRadius: 5,
};
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    control: {
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
    input: {
      display: 'flex',
    },
    label: {},
    select: {
      marginTop: theme.spacing(1),
      backgroundColor: 'white',
      width: '100%',
    },
    valueContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      flex: 1,
      alignItems: 'center',
      overflow: 'hidden',
    },
    noOptionsMessage: {
      padding: theme.spacing(1, 2),
    },
    singleValue: {
      fontSize: 16,
    },
    placeholder: {
      position: 'absolute',
      left: 2,
      bottom: 6,
      fontSize: 16,
    },
    paper: {
      position: 'absolute',
      zIndex: 999,
      left: 0,
      right: 0,
    },
  }),
);

function NoOptionsMessage(props: NoticeProps<IAutocomplete.IAutocompleteItem>) {
  return (
    <Typography
      color="textSecondary"
      className={props.selectProps.classes.noOptionsMessage}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}

type InputComponentProps = Pick<BaseTextFieldProps, 'inputRef'> &
  HTMLAttributes<HTMLDivElement>;

function inputComponent({ inputRef, ...props }: InputComponentProps) {
  return <div ref={inputRef} {...props} />;
}

function Control(props: ControlProps<IAutocomplete.IAutocompleteItem>) {
  const {
    children,
    innerProps,
    innerRef,
    selectProps: { classes, TextFieldProps },
  } = props;

  return (
    <TextField
      className={classes.control}
      InputProps={{
        inputComponent,
        inputProps: {
          className: classes.input,
          ref: innerRef,
          children,
          ...innerProps,
        },
      }}
      {...TextFieldProps}
      variant="outlined"
      fullWidth
    />
  );
}

function Option(props: OptionProps<IAutocomplete.IAutocompleteItem>) {
  return (
    <MenuItem
      ref={props.innerRef}
      selected={props.isFocused}
      component="div"
      style={{
        fontWeight: props.isSelected ? 500 : 400,
      }}
      {...props.innerProps}
    >
      {props.children}
    </MenuItem>
  );
}

type MuiPlaceholderProps = Omit<
  PlaceholderProps<IAutocomplete.IAutocompleteItem>,
  'innerProps'
> &
  Partial<
    Pick<PlaceholderProps<IAutocomplete.IAutocompleteItem>, 'innerProps'>
  >;
function Placeholder(props: MuiPlaceholderProps) {
  const { selectProps, innerProps = {}, children } = props;
  return (
    <Typography
      color="textSecondary"
      className={selectProps.classes.placeholder}
      {...innerProps}
    >
      {children}
    </Typography>
  );
}

function SingleValue(props: SingleValueProps<IAutocomplete.IAutocompleteItem>) {
  return (
    <Typography
      className={props.selectProps.classes.singleValue}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}

function ValueContainer(
  props: ValueContainerProps<IAutocomplete.IAutocompleteItem>,
) {
  return (
    <div className={props.selectProps.classes.valueContainer}>
      {props.children}
    </div>
  );
}

function Menu(props: MenuProps<IAutocomplete.IAutocompleteItem>) {
  return (
    <Paper
      square
      className={props.selectProps.classes.paper}
      {...props.innerProps}
    >
      {props.children}
    </Paper>
  );
}

const components = {
  Control,
  Menu,
  Option,
  NoOptionsMessage,
  Placeholder,
  SingleValue,
  ValueContainer,
};

export const InputAutocomplete: FC<IAutocomplete.IProps> = (
  props: IAutocomplete.IProps,
) => {
  const classes = useStyles();
  const [single, setSingle] = React.useState<
    ValueType<IAutocomplete.IAutocompleteItem>
  >(null);

  function handleChange(
    optionItem: ValueType<IAutocomplete.IAutocompleteItem>,
  ) {
    setSingle(optionItem);

    if (props.onChange) {
      props.onChange(optionItem as IAutocomplete.IAutocompleteItem);
    }
  }

  return (
    <FormControl className={classes.root}>
      <Typography className={classes.label} color="textPrimary">
        {props.label}
      </Typography>
      <NoSsr>
        <Select
          className={classes.select}
          classes={classes}
          inputId={props.inputId}
          TextFieldProps={{
            error: props.error,
          }}
          placeholder=""
          options={props.suggestions}
          components={components}
          value={single}
          onChange={handleChange}
          isSearchable
          isClearable
        />
      </NoSsr>
    </FormControl>
  );
};

InputAutocomplete.defaultProps = {
  error: false,
};

export type IAutocompleteItem = IAutocomplete.IAutocompleteItem;
