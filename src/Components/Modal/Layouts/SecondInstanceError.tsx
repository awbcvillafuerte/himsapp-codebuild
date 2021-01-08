import React from 'react'
import {
    Dialog,
    Button
} from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';

interface IProps {
    open: boolean
    onClose: () => void
}

const useStyles = makeStyles((theme: Theme) => ({
	dialogTitle: {
        fontSize: 20,
        fontWeight: 800,
        color: '#272E4C'
	},
    dialogContent: {
        padding: theme.spacing(5),
        color: '#272E4C',

        paddingTop: 20
    },
    instruction: {
        marginBottom: theme.spacing(6),

        '& p': {
            lineHeight: 1.4,
            fontSize: 14,
            color: '#272E4C'
        }
    },
    buttonCenter: {
        minWidth: 125,
        backgroundColor: '#3AB77D',
        color: '#ffffff',
        margin: '0 auto',
        display: 'block',
        '&:hover': {
            backgroundColor: '#3AB77D'
        }
    },
    closeIcon: {
        position: 'absolute',
        top: 15,
        right: 15,
        cursor: 'pointer'
    },
    step: {
        paddingLeft: '1em',
        fontSize: 14,

        '& li': {
            margin: '3px 0'
        },

        '& p': {
            margin: 0
        }
    },
    subList: {
        listStyleType: 'lower-alpha',
        paddingLeft: '1em',
        fontSize: 14,

        '& li': {
            margin: '3px 0'
        },

        '& p': {
            padding: 0,
            margin: 0,
        }
    }
}));

export const SecondInstanceError: React.FC<IProps> = (props: IProps):JSX.Element => {
    const {
        open,
        onClose
    } = props
    const classes = useStyles();

    return (
        <>
            <Dialog
                open={open}
                onClose={onClose}
                aria-labelledby="form-dialog-title"
                fullWidth={true}
                maxWidth="sm">
                <CloseIcon onClick={onClose} className={classes.closeIcon} />
                <div className={classes.dialogContent}>
                    <h2 className={classes.dialogTitle}>Multiple instances of HIMS are open</h2>
                    <div className={classes.instruction}>
                        <p>More than one instance of HIMS may be open in the background.<br />
                        Please make sure that you are using only 1 instance of HIMS.</p>
                        <p>To open HIMS, perform the following troubleshooting steps: </p>
                        <ol className={classes.step}>
                            <li>
                                <p>Open the task manager by</p>
                                    <ol className={classes.subList}>
                                        <li>
                                            <p>Right-clicking on the task bar and choosing Task Manger</p>
                                        </li>
                                        <li>
                                            <p>Or press CTRL + Alt + Delete</p>
                                        </li>
                                    </ol>
                            </li>
                            <li>
                                <p>Go to the Processes tab. Click 'More details' if the Processes tab cannot be found.</p>
                            </li>
                            <li>
                                <p>Under Background processes, look for the HIMS process/es.</p>
                            </li>
                            <li>
                                <p>Click on the process and click End task for all HIMS processes.</p>
                            </li>
                            <li>
                                <p>Login again to HIMS.</p>
                            </li>
                            <li>
                                <p>Practice graceful exit by clicking on the version number and clicking exit when closing the HIMS application.</p>
                            </li>
                        </ol>
                    </div>
                    <Button onClick={onClose} className={classes.buttonCenter}>Okay</Button>
               </div>
            </Dialog>
        </>
    )
}