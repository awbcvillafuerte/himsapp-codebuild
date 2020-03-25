import React from 'react'
import {
    Dialog,
    OutlinedInput,
    Grid,
    Button
} from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';

interface IProps {
    open: boolean
    onClose: () => void
    onSubmit: (value: any) => void
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
        marginBottom: theme.spacing(6)
    },
    fields: {
        marginBottom: theme.spacing(2),
        '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#3AB77D'
        }
    },
    inputlabel: {
        color: '#272E4C',
        marginBottom: 5,
        display: 'block'
    },
    inputField: {
        height: 40,
        fontSize: 14,
        borderRadius: 8
    },
    eyeIcon: {
        opacity: 0.5
    },
    buttonleft: {
        minWidth: 125,
        borderColor: '#3AB77D',
        color: '#3AB77D',
        '&:hover': {
            backgroundColor: 'transparent'
        }
    },
    buttonRight: {
        minWidth: 125,
        backgroundColor: '#3AB77D',
        color: '#ffffff',
        '&:hover': {
            backgroundColor: '#3AB77D'
        }
    },
    buttons: {
        marginTop: theme.spacing(4)
    },
    closeIcon: {
        position: 'absolute',
        top: 15,
        right: 15,
        cursor: 'pointer'
    }
}));

export const ForgotPassword: React.FC<IProps> = (props: IProps):JSX.Element => {
    const {
        open,
        onClose,
        onSubmit
    } = props
    const classes = useStyles();

    const handleUsernameChange = (event: any) => {
        setUsername(event.target.value)
    }

    const submitUsername = () => {
        if (username !== '') {
            onSubmit(username)
        } else {
            setError(true)
        }
    }

    const [username, setUsername] = React.useState<string>('')
    const [error, setError] = React.useState<any>(null)

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
                    <h2 className={classes.dialogTitle}>Forgot Password</h2>
                    <div className={classes.instruction}>
                        <span>
                            Please enter your username and wait for the temporary password that will be sent to your registered email address.
                        </span>
                    </div>

                    <div>
                        <div className={classes.fields}>
                            <span className={classes.inputlabel}>Username</span>
                            <OutlinedInput
                                autoFocus
                                error={error !== null && error}
                                className={classes.inputField}
                                fullWidth={true}
                                value={username}
                                type="text"
                                name='new_password'
                                onChange={handleUsernameChange}
                                labelWidth={0}
                            />
                        </div>

                        <Grid
                            spacing={6}
                            container
                            className={classes.buttons}>
                            <Grid item xs={6} style={{textAlign: 'right'}}>
                                <Button
                                    onClick={onClose}
                                    className={classes.buttonleft}
                                    variant="outlined">Cancel</Button>
                            </Grid>
                            <Grid item xs={6} style={{textAlign: 'left'}}>
                                <Button
                                    onClick={submitUsername}
                                    className={classes.buttonRight}>Submit</Button>
                            </Grid>
                        </Grid>
                    </div>
               </div>
            </Dialog>
        </>
    )
}