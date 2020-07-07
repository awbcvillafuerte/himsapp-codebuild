import React, { FC } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles, Theme } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles((theme: Theme) => ({
	dialog: {
	},
	dialogTitle: {
		fontWeight: 800,
		padding: '1.5em',
		fontSize: 18
	},
	dialogContent: {
		minWidth: 320,
	},
	dialogAction: {
		marginTop: 16,
		marginBottom: theme.spacing(2),
	},
	buttonCenter: {
        minWidth: 125,
        backgroundColor: '#3AB77D',
        color: '#ffffff',
        '&:hover': {
            backgroundColor: '#3AB77D'
        }
    },
}));

interface MsgModalProps {
  isModalOpen: boolean;
  onClose: () => void;
  title: string;
  message: any;
  buttonText?: any;
}

export const MessageDialog: FC<MsgModalProps> = props => {
	const classes = useStyles();
    const reset = () => {};
    
	const handleClose = () => {
        reset();
        props.onClose();
    };

	return (
		<Dialog
			open={props.isModalOpen}
			onClose={handleClose}
			aria-labelledby="form-dialog-title"
			maxWidth="sm"
			className={classes.dialog}
		>
			<Typography className={classes.dialogTitle}>{props.title}</Typography>
			<DialogContent className={classes.dialogContent}>
				<Grid container spacing={2} justify="space-between" alignItems="flex-start">
					<Grid item xs={12}>
						{props.message}
					</Grid>
				</Grid>
			</DialogContent>
			<DialogActions className={clsx(classes.dialogAction)}>
				<Grid container spacing={2} justify="center" alignItems="flex-start">
					<Grid item xs={4}>
						<Button
							className={classes.buttonCenter}
							onClick={handleClose}
							variant="contained"
							color="primary"
							fullWidth >
                            {props.buttonText}
						</Button>
					</Grid>
				</Grid>
			</DialogActions>
		</Dialog>
	);
};

MessageDialog.defaultProps = {
	isModalOpen: false,
};

