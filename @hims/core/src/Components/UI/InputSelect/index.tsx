import React, { FC, useState, ChangeEvent } from 'react';
// import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Select from '@material-ui/core/Select';
// import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import ExpandMoreRounded from '@material-ui/icons/ExpandMoreRounded';

import { ISelect } from './ISelect';

const labelColor = 'rgb(21,28,28)';
const grayColor = 'rgba(39,52,76,0.3)';
const grayColorFocused = 'rgba(39,52,76,0.5)';
const borderCss = {
  borderColor: grayColor,
  borderRadius: 5,
};
const borderStyles = {
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
};

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    width: '100%'
  },
  label: {
    fontSize:'.8em'
  },
  select: {
    marginTop: theme.spacing(1),
    backgroundColor: 'white'
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  icon: {
    marginRight: theme.spacing(2.5),
    color: grayColor,
  },
}));

// const StyledFormControl = withStyles(borderStyles)(FormControl);
const StyledOutlinedInput = withStyles(borderStyles)(OutlinedInput);

export const InputSelect: FC<ISelect.IProps> = (props: ISelect.IProps) => {
  const defaultValue: ISelect.ISelectItem = {
    id: -1,
    value: '',
    label: '',
  };
  const items: ISelect.ISelectItem[] = [defaultValue, ...props.data];

  const getDefaultValue = () => {
    if (props.value) {
      const defVal = items.find(item => item.value === props.value);

      if (defVal) {
        return defVal;
      }
    }

    return defaultValue;
  };

  const classes = useStyles();

  const [currentValue, setCurrentValue] = useState<ISelect.ISelectItem>(
    getDefaultValue(),
  );

  const inputLabel = React.useRef<HTMLLabelElement>(null);
  const [labelWidth, setLabelWidth] = React.useState(0);

  React.useEffect(() => {
    setLabelWidth(inputLabel.current!.offsetWidth);
  }, []);

  const onChange = (
    e: ChangeEvent<{ name?: string | undefined; value: unknown }>,
  ) => {
    const selectedItem =
      items.find(item => item.value === e.target.value) || defaultValue;

    setCurrentValue(selectedItem);

    if (props.onChange) {
      props.onChange(selectedItem);
    }
  };

  const displaySelectItem = (
    props: ISelect.IProps,
    selectItem: ISelect.ISelectItem,
  ) => {
    if (props.displaySelectItem) {
      return props.displaySelectItem(selectItem);
    }

    const disabled = selectItem.id === -1 && props.required;

    return (
      <MenuItem
        key={selectItem.id}
        value={selectItem.value}
        disabled={disabled}
      >
        {selectItem.label}
      </MenuItem>
    );
  };

  return (
    <div className={classes.formControl}>
      {props.label ? <InputLabel
        color="textPrimary"
        className={classes.label}
        ref={inputLabel}
        htmlFor={props.id}
        error={props.error}
      >
        {props.label}
      </InputLabel> : null}
      <Select
        className={classes.select}
        value={currentValue.value}
        onChange={onChange}
        input={
          <StyledOutlinedInput
            id={props.id}
            name={props.id}
            error={props.error}
            labelWidth={labelWidth}
            fullWidth
          />
        }
        IconComponent={() => <ExpandMoreRounded className={classes.icon} />}
      >
        {items.map(item => displaySelectItem(props, item))}
      </Select>
    </div>
  );
};

InputSelect.defaultProps = {
  value: '',
  error: false,
  required: false,
  onChange: (value: string) => {
    console.log(value);
  },
};

export type ISelectItem = ISelect.ISelectItem;
