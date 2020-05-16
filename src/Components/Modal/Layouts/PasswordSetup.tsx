import React from 'react'
import {
    Dialog,
    OutlinedInput,
    InputAdornment,
    IconButton,
    Grid,
    Button
} from '@material-ui/core'
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
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

export const PasswordSetupModal: React.FC<IProps> = (props: IProps):JSX.Element => {
    const {
        open,
        onClose,
        onSubmit
    } = props
    const classes = useStyles();

    const handleShowPassword = (prop: any) => {
        if (pwData[prop]['show']) {
            setPwData({
                ...pwData,
                [prop]: {
                    ...pwData[prop],
                    show: false
                }
            })
        } else {
            setPwData({
                ...pwData,
                [prop]: {
                    ...pwData[prop],
                    show: true
                }
            })
        }
    }

    const handlePwDataChange = ({target}: any) => {
        const {
            value,
            name
        } = target

        setPwData({
            ...pwData,
            [name]: {
                ...pwData[name],
                value: value
            }
        })
    }

    const submitPassword = () => {
        const { new_password, conf_password } = pwData;

        const _pwd = {
            password: new_password.value,
            conf_password: conf_password.value
        }

        if (new_password.value === '') {
            setErrorNew(true)
        } else {
            setErrorNew(false)
        }

        if (conf_password.value === '') {
            setErrorConf(true)

            return;
        } else {
            setErrorConf(false)
        }

        if (new_password.value !== conf_password.value) {
            setErrorConf(true)
            setErrorNew(true)
        } else {
            setErrorConf(false)
            setErrorNew(false)
            onSubmit(_pwd)
        }
    }

    const [pwData, setPwData] = React.useState<any>({
        new_password: {
            value: '',
            show: false
        },
        conf_password: {
            value: '',
            show: false
        }
    })

    const [errorNew, setErrorNew] = React.useState<any>(null)
    const [errorConf, setErrorConf] = React.useState<any>(null)

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
                    <h2 className={classes.dialogTitle}>Password Setup</h2>
                    <div className={classes.instruction}>
                        <p>Please set a new password for your account:</p>
                        <span>
                            {/* — Mismatched  */}
                            — Must be 8 characters <br />
                            — Must have number and letter <br />
                            — Must have 1 upper case <br />
                            — Must have 1 special character
                        </span>
                    </div>
                    <div>
                        <div className={classes.fields}>
                            <span className={classes.inputlabel}>New Password</span>
                            <OutlinedInput
                                autoFocus
                                error={errorNew !== null && errorNew}
                                className={classes.inputField}
                                fullWidth={true}
                                value={pwData.new_password.value}
                                type={pwData.new_password.show ? 'text' : 'password'}
                                name='new_password'
                                onChange={handlePwDataChange}
                                endAdornment={
                                    <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={() => handleShowPassword('new_password')}
                                        edge="end">
                                        {pwData.new_password.show ? <Visibility fontSize="small" className={classes.eyeIcon} /> : <VisibilityOff fontSize="small" className={classes.eyeIcon} />}
                                    </IconButton>
                                    </InputAdornment>
                                }
                                labelWidth={0}
                            />
                        </div>
                        <div className={classes.fields}>
                            <span className={classes.inputlabel}>Confirm New Password</span>
                            <OutlinedInput
                                error={errorConf !== null && errorConf}
                                className={classes.inputField}
                                fullWidth={true}
                                value={pwData.conf_password.value}
                                type={pwData.conf_password.show ? 'text' : 'password'}
                                name='conf_password'
                                onChange={handlePwDataChange}
                                endAdornment={
                                    <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={() => handleShowPassword('conf_password')}
                                        edge="end">
                                        {pwData.conf_password.show ?  <Visibility fontSize="small" className={classes.eyeIcon} /> : <VisibilityOff fontSize="small" className={classes.eyeIcon} />}
                                    </IconButton>
                                    </InputAdornment>
                                }
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
                                    onClick={submitPassword}
                                    className={classes.buttonRight}>Submit</Button>
                            </Grid>
                        </Grid>
                    </div>
               </div>
            </Dialog>
        </>
    )
}