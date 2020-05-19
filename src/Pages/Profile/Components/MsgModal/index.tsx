import React, { FC } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import { makeStyles, Theme } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles((theme: Theme) => ({
	dialog: {
	},
	dialogTitle: {
		fontWeight: 800,
	},
	dialogContent: {
		minWidth: 320,
		fontSize: 14
	},
	dialogAction: {
		marginTop: 16,
		marginBottom: theme.spacing(2),
	},
	buttonOkay: {
		backgroundColor: '#3ab77d',
		'&:hover': {
			backgroundColor: '#3ab77d'
		}
	}
}));

interface MsgModalProps {
  isModalOpen: boolean;
  onClose: () => void;
  title: string;
  message: any;
  messageMaxWidth?: string;
}

export const MsgModal: FC<MsgModalProps> = props => {
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
			<DialogTitle id="form-dialog-title" className={classes.dialogTitle}>{props.title}</DialogTitle>
			<DialogContent className={classes.dialogContent}>
				<Grid container spacing={2} justify="space-between" alignItems="flex-start">
					<Grid item xs={12}>
						<span style={{display: "inline-block", maxWidth: props.messageMaxWidth}}>{props.message}</span>
					</Grid>
				</Grid>
			</DialogContent>
			<DialogActions className={clsx(classes.dialogAction)}>
				<Grid container spacing={2} justify="center" alignItems="flex-start">
					<Grid item xs={4}>
						<Button
							className={classes.buttonOkay}
							onClick={handleClose}
							variant="contained"
							color="primary"
							fullWidth >
                            Okay
						</Button>
					</Grid>
				</Grid>
			</DialogActions>
		</Dialog>
	);
};

MsgModal.defaultProps = {
	isModalOpen: false,
};

