import React, { FC, useState } from 'react';
import { ITicketModal } from './ITicketModal';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import {InputSelect} from '../InputSelect';
import {InputTextField} from '../InputTextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { faSquare } from '@fortawesome/free-regular-svg-icons';

//declare class to style components
const useStyles = makeStyles(theme => ({
  root: {
    flexWrap:'wrap'
  },
  inputSelect: {
    marginBottom: theme.spacing(1),
  },
  dialog:{
    align:'center',
    justify:'center',
    width:'100%'
  },
  dialogContent :{
    paddingTop : '0px'
  },
  container: {
    paddingRight:'15px',
    paddingLeft:'15px'
  },
  dialogTitle: {
    marginTop: theme.spacing(2)
  },
  dialogContentTitle: {},
  dialogContentText: {},
  formControlLabel: {},
  textField: {},
  checkBox:{
    paddingLeft:'10px'
  },
  dialogAction: {
		marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
    justifyContent:'center'
	},
  resolveDialogAction: {
		marginBottom: theme.spacing(2),
    marginTop: theme.spacing(4),
    justifyContent:'center'
	},
  leftButton: {
    width:115,
    marginLeft:15,
    marginRight:10
  },
  rightButton: {
    width:115,
    marginLeft:10,
    marginRight:15
  },
}));

const StyledCheckbox = withStyles({
  root: {
    color: '#9EA3AC',
    '&$checked': {
      color: '#1E2071',
    },
  },
  checked: {},
})(Checkbox);

export const TicketModal: FC<ITicketModal.IProps> = props => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    notes:'',
    notesError:false,
    isResolved:false
  });

  const [disabled, setDisabled] = useState(true);

  //reset values and close dialog
  const handleClose = () => {
		setDisabled(true);
    setState({notes:'',
    notesError:false,
    isResolved:false});
    props.onClose();
	};

  //changes state of the changed values
  const setFieldValue = (fieldName: string, value: any) => {
		setState(state => ({
			...state,
			[fieldName]: value,
		}));
	};

  const setFieldError = (fieldName: string, error: boolean) => {
		setState(state => ({
			...state,
			[fieldName]: error,
		}));
	};

  /* render ticket management modal in 3 different types (Resolve, Assign, Escalate)
      Sample usage : 
      import { Components } from '@hims/core';
      const Modal = Components.UI.TicketModal.TicketModal;

      <Modal 
					type="Escalate" (Resolve/Assign/Escalate) - is not case sensitive but will render title as is
					onClose={this.onAddDataFieldModalClose}
					isModalOpen={ticketModal}
					selectItems={[{"id":0,"value":'Jae',"label":'Jae'},{"id":1,"value":'Lambert',"label":'Lambert'},{"id":2,"value":'Bau',"label":'Bau'}]} 
					onSubmit={this.onAddDataFieldModalClose}
          />
  */

  let component: JSX.Element = <div/>;
  switch((props.type).toLowerCase()) {
    case 'resolve' :
      console.log('in resolve')
      component =
      <div>
        <Grid container className={classes.container} justify="flex-start" alignItems="flex-start" direction="column">
          <Grid item xs>
            <DialogTitle disableTypography={true} id="dialog-title" className={classes.dialogTitle}>{props.type} Ticket</DialogTitle>
          </Grid>
          <Grid item xs>
            <DialogContent className={classes.dialogContent}>
              <DialogContentText className={classes.dialogContentText} id="alert-dialog-description">
                How was the issue resolved?
              </DialogContentText>
              <InputTextField
                value={state.notes}
                error={state.notesError}
                multiline={true}
                rows={4}
                onChange={(value: string) => {
                  setFieldValue('notes', value);
                  setFieldError(
                    'notesError',
                    value.length === 0,
                  );
                }}
              />
            </DialogContent>
            <Grid item xs>
              <DialogContent className={classes.dialogContent}>
                <FormControlLabel className={classes.formControlLabel}
                    control={
                      <StyledCheckbox
                        icon={<FontAwesomeIcon icon={faSquare} />}
                        checkedIcon={<FontAwesomeIcon icon={faCheckSquare} />}
                        color="primary"
                        checked={state.isResolved}
                        onChange={(value: any) => {
                          setFieldValue('isResolved', value.target.checked);
                          setDisabled(!value.target.checked);
                        }}
                        inputProps={{
                          'aria-label': 'primary checkbox',
                        }}
                      />
                    }
                    label="Mark as resolved"
                    labelPlacement="end"
                  />
                </DialogContent>
              </Grid>
            <DialogActions className={classes.resolveDialogAction}>
              <Button className={classes.leftButton} variant="contained" onClick={handleClose} color="secondary">
                Cancel
              </Button>
              <Button className={classes.rightButton} variant="contained" disabled={disabled} onClick={props.onSubmit} color="primary">
                Resolve
              </Button>
            </DialogActions>
          </Grid>
        </Grid>
      </div>;
      break;
      case 'assign' :
      console.log('in assign')
      component = 
        <div>
          <Grid container className={classes.container} justify="flex-start" alignItems="flex-start" direction="column">
            <Grid item xs>
              <DialogTitle disableTypography={true} id="dialog-title" className={classes.dialogTitle}>{props.type} Ticket</DialogTitle>
            </Grid>
            <Grid item xs>
              <DialogContent className={classes.dialogContent}>
                <InputSelect id='modal-input-select' label='Assign To' data={props.selectItems}/>
                <DialogContentText/>
                <InputTextField
                  label='Notes'
                  value={state.notes}
                  error={state.notesError}
                  multiline={true}
                  rows={4}
                  onChange={(value: string) => {
                    setFieldValue('notes', value);
                    setFieldError(
                      'notesError',
                      value.length === 0,
                    );
                  }}
                />
              </DialogContent>
              <DialogActions className={classes.dialogAction}>
                <Button className={classes.leftButton} variant="contained" onClick={handleClose} color="secondary">
                  Cancel
                </Button>
                <Button className={classes.rightButton} variant="contained" onClick={props.onSubmit} color="primary">
                Assign
                </Button>
              </DialogActions>
            </Grid>
          </Grid>
        </div>;
        break;
    case 'escalate' :
      console.log('in escalate')
      component = 
        <div>
          <Grid container className={classes.container} justify="flex-start" alignItems="flex-start" direction="column">
            <Grid item xs>
              <DialogTitle disableTypography={true} id="dialog-title" className={classes.dialogTitle}>{props.type} Ticket</DialogTitle>
            </Grid>
            <Grid item xs>
              <DialogContent className={classes.dialogContent}>
                <InputSelect id='modal-input-select' label='Escalate To' data={props.selectItems}/>
                <DialogContentText/>
                <InputTextField
                  label='Notes'
                  value={state.notes}
                  error={state.notesError}
                  multiline={true}
                  rows={4}
                  onChange={(value: string) => {
                    setFieldValue('notes', value);
                    setFieldError(
                      'notesError',
                      value.length === 0,
                    );
                  }}
                />
              </DialogContent>
              <DialogActions className={classes.dialogAction}>
                <Button className={classes.leftButton} variant="contained" onClick={handleClose} color="secondary">
                  Cancel
                </Button>
                <Button className={classes.rightButton} variant="contained" onClick={props.onSubmit} color="primary">
                  Escalate
                </Button>
              </DialogActions>
            </Grid>
          </Grid>
        </div>;
        break;
  }
  
    return (
      <Dialog
          className={classes.dialog}
          open={props.isModalOpen}
          aria-labelledby="simple-dialog-title"
        >
        {component}
      </Dialog>
    );
};

//declare defaults
TicketModal.defaultProps = {
  isModalOpen:false,
  type:'Resolve',
  selectItems:[{"id":0,"value":'',"label":''}]
};
