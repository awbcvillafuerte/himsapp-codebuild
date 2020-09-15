import React from 'react'
import { changePasswordModalStyle } from '../style'

// Material UI Imports
import {
    Grid,
    Box,
    Dialog,
    Button,
    DialogTitle,
    DialogActions,
    DialogContent,
    IconButton,
    // TextField,
    InputLabel,
    OutlinedInput,
    InputAdornment
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import ErrorIcon from '@material-ui/icons/Error'
import { MsgModal } from './MsgModal'
import StorageService from '../storage';

interface IProps {
    visible: boolean,
    userId: string,
    onClose: () => void;
    setLoading: any
}

interface textFieldProps {
    label: string,
    value: string,
    classes: any,
    note?: any,
    id: string
    error: boolean,
    errorMsg: string,
    onChange: (value: any, prop: any) => void;
}

export const ChangePassword:
    React.FC<IProps> = (props: IProps): JSX.Element => {

        React.useEffect(() => {
            StorageService('config', 'password').then((r) => {
                setPwValidator(r.result)
            })
        }, [])

        const {
            visible,
            onClose
        } = props;
        const classes = changePasswordModalStyle()

        // Password values handling
        const handleTextFieldChange = (e: any, prop: any) => {
            const { value } = e.target

            setPasswordValues({ ...passwordValues, [prop]: value })

            const regex = new RegExp(pwValidator.regex)

            if (prop === 'newPassword') {
                if (!regex.test(value)) {
                    setNerror({ message: 'Invalid Input', error: true })
                } else {
                    if (value === passwordValues.confirmPassword) {
                        setNerror({ message: '', error: false })
                        setCerror({ message: '', error: false })
                    } else {
                        setCerror({ message: 'Password doesn’t match', error: true })
                        setNerror({ message: '', error: true })
                    }
                }
            } else if (prop === 'confirmPassword') {
                if (!regex.test(value)) {
                    setCerror({ message: 'Invalid Input', error: true })
                } else {
                    if (!regex.test(value)) {
                        setCerror({ message: 'Invalid Input', error: true })
                    } else {
                        if (value === passwordValues.newPassword) {
                            setNerror({ message: '', error: false })
                            setCerror({ message: '', error: false })
                        } else {
                            setCerror({ message: 'Password doesn’t match', error: true })
                            setNerror({ message: '', error: true })
                        }
                    }
                }
            } else if (prop === 'oldPassword') {
                if (value === '') {
                    setOerror({ message: 'Invalid Input', error: true })
                } else {
                    setOerror({ message: '', error: false })
                }
            }
        }

        // Password values reset default
        const resetPasswordValues = () => {
            setPasswordValues({
                oldPassword: '',
                newPassword: '',
                confirmPassword: ''
            })
            setOerror({
                ...oError,
                error: false
            })
            setNerror({
                ...nError,
                error: false
            })
            setCerror({
                ...cError,
                error: false
            })

            onClose()
        }

        const fetchChange = () => {
            // Declare password values
            const { oldPassword, newPassword, confirmPassword } = passwordValues

            let constructParams = {
                old_password: oldPassword,
                new_password: newPassword,
                conf_password: confirmPassword
            }

            if (oldPassword === '') {
                setOerror({ message: 'Invalid Input', error: true })

                return 
            } else {
                setOerror({ message: '', error: false })
            }

            props.setLoading(true)
            StorageService('user_data', 'access_token').then(({result}: any) => {
                fetch(`${process.env.REACT_APP_HIMS_API_CLIENT_URL}user/password`, {
                    method: 'PUT',
                    body: JSON.stringify(constructParams),
                    headers: {
                        'Authorization': `Bearer ${result}`,
                        'Content-type': 'application/json'
                    }
                }).then(async (data: any) => {
                    let jsondata = await data.json();

                    if (!jsondata.error) {
                        setModalDone({
                            title: 'Change Password Success',
                            message: 'You have successfully changed your password.',
                            visible: true
                        })
                        setPasswordValues({
                            oldPassword: '',
                            newPassword: '',
                            confirmPassword: ''
                        })
                        onClose();
                    } else {
                        setModalDone({
                            title: 'Error',
                            message: 'Something went wrong. Your password has not been changed.',
                            visible: true
                        })
                    }

                    props.setLoading(false)
                    
                    
                }).catch((err: any) => {
                    if (err.message.includes('UM21')) {
                        setOerror({ message: 'Incorrect Password', error: true })
                    }
                    setModalDone({
                        title: 'Error',
                        message: 'Something went wrong. Your password has not been changed.',
                        visible: true
                    })

                    props.setLoading(false)
                })
            })


            // setNerror(newIsValid)
            // setCerror(newCIsValid)

        }

        // const validatePasswordValue = (password: string) => {
        //     const minLenght = 6

        //     if (password.length < minLenght) {
        //         return false
        //     }

        //     return true
        // }

        // const confirmNewPassword = (newP1: string, newP2: string) => {
        //     if ((newP1 !== '' && newP2 !== '') && (newP1 !== newP2)) {
        //         return false
        //     }

        //     return true
        // }

        const [passwordValues, setPasswordValues] = React.useState({
            oldPassword: '',
            newPassword: '',
            confirmPassword: ''
        })
        const [oError, setOerror] = React.useState<any>({
            message: '',
            error: false
        })
        const [nError, setNerror] = React.useState<any>({
            message: '',
            error: false
        })
        const [cError, setCerror] = React.useState<any>({
            message: '',
            error: false
        })

        const [modalDone, setModalDone] = React.useState<any>({
            message: '',
            title: '',
            visible: false
        })

        const handleDoneClose = () => {
            setModalDone({
                message: '',
                title: '',
                visibile: false
            })
        }

        const [pwValidator, setPwValidator] = React.useState<any>({
            regex: '',
            character: []
        })

        return (
            <>
                <Dialog
                    open={visible}
                    onClose={resetPasswordValues}
                    aria-labelledby="form-dialog-title"
                    maxWidth="sm"
                    className={classes.dialog}>
                    {/* Modal Content Area */}
                    <Grid
                        container
                        className={classes.container}
                        justify="flex-start"
                        alignItems="flex-start"
                        direction="column">
                        <Grid item xs>
                            <DialogTitle
                                className={classes.dialogTitle}
                                disableTypography={false}
                                id="form-dialog-title" >
                                <Box fontWeight={700}>Change Password</Box>
                                <IconButton
                                    aria-label="close"
                                    className={classes.closeButton}
                                    onClick={resetPasswordValues}>
                                    <CloseIcon />
                                </IconButton>
                            </DialogTitle>
                        </Grid>
                        <Grid
                            item
                            xs
                            className={classes.dialogContentContainer}>
                            <DialogContent>
                                <Grid
                                    container
                                    spacing={2}
                                    justify="space-between"
                                    alignItems="flex-start">
                                    <Grid item xs={12}>
                                        <TextFieldWithEyeIcon
                                            id='oldPassword'
                                            error={oError.error}
                                            errorMsg={oError.message}
                                            label='Enter your old password'
                                            value={passwordValues.oldPassword}
                                            onChange={handleTextFieldChange}
                                            classes={classes} />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextFieldWithEyeIcon
                                            id='newPassword'
                                            error={nError.error}
                                            errorMsg={nError.message}
                                            label='Enter your new password'
                                            note={
                                                <>
                                                    <span style={{display: 'block', fontSize: 12, color: '#797F92', marginBottom: 5}}>Please update your password to continue.</span>
                                                    <ul style={{display: 'block', fontSize: 12, color: '#797F92', paddingLeft: 15}}>
                                                        <li>Must be <strong>{pwValidator.min_length} min to {pwValidator.max_length} max characters</strong></li>
                                                        {
                                                            pwValidator.character.map((e: any) => 
                                                                e === 'number' ? 
                                                                    <li>Must have <strong>letters and numbers</strong></li> :
                                                                e === 'uppercase_letter' ?
                                                                    <li>Must have <strong>at least 1 upper case</strong></li> :
                                                                e === 'lowercase_letter' ?
                                                                    <li>Must have <strong>at least 1 lower case</strong></li> :
                                                                e === 'special_character' ?
                                                                    <li>Must have <strong>at least 1 special</strong></li> : ''
                                                            )
                                                        }
                                                    </ul>
                                                </>
                                            }
                                            value={passwordValues.newPassword}
                                            onChange={handleTextFieldChange}
                                            classes={classes} />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextFieldWithEyeIcon
                                            id='confirmPassword'
                                            error={cError.error}
                                            errorMsg={cError.message}
                                            label='Confirm your new password'
                                            value={passwordValues.confirmPassword}
                                            onChange={handleTextFieldChange}
                                            classes={classes} />
                                    </Grid>
                                </Grid>
                            </DialogContent>
                            <DialogActions className={classes.dialogAction}>
                                <Grid
                                    container
                                    justify="center"
                                    alignItems="center">
                                    <Grid item xs={6}>
                                        <Button
                                            onClick={resetPasswordValues}
                                            className={`${classes.button} ${classes.buttonCancel}`}
                                            variant={'outlined'}
                                            color={'secondary'}>Cancel</Button>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Button
                                            disabled={
                                                oError.error !== null && cError.error !== null && nError.error !== null &&
                                                !oError.error && !cError.error && !nError.error ? false : true
                                            }
                                            onClick={fetchChange}
                                            className={`${classes.button} ${classes.buttonChange}`}
                                            variant={'contained'}
                                            color={'primary'}>Change</Button>
                                    </Grid>
                                </Grid>
                            </DialogActions>
                        </Grid>
                    </Grid>
                </Dialog>

                <MsgModal
                    isModalOpen={modalDone.visible}
                    onClose={handleDoneClose}
                    title={modalDone.title}
                    message={modalDone.message}
                />
            </>
        )
    }



const TextFieldWithEyeIcon: React.FC<textFieldProps> = (options: textFieldProps): JSX.Element => {
    const {
        classes,
        label,
        onChange,
        value,
        note,
        id,
        error,
        errorMsg
    } = options

    const [type, setType] = React.useState<string>('password')

    const handleClickShowPassword = () => {
        if (type === 'password') {
            setType('text')
        } else {
            setType('password')
        }
    }

    return (
        <>
            <InputLabel
                className={classes.inputLabel}
                htmlFor="role_id">{label}</InputLabel>
            <span className={classes.labelNote}>{note && note}</span>
            <OutlinedInput
                id={id}
                error={error}
                type={type}
                onChange={(e) => onChange(e, id)}
                value={value}
                className={classes.inputTextField}
                labelWidth={0}
                // helperText="Incorrect entry."
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}>
                            {type === 'text' ? <Visibility className={classes.iconEye} /> : <VisibilityOff className={classes.iconEye} />}
                        </IconButton>
                    </InputAdornment>
                } />
            {
                error &&
                <Grid container>
                    <Grid item xs={9}>
                        <span className={classes.errorMessage}>{errorMsg}</span>
                    </Grid>
                    <Grid item xs={3} style={{ textAlign: 'right' }}>
                        <ErrorIcon className={classes.errorIcon} fontSize='small' />
                    </Grid>
                </Grid>
            }
        </>
    )
}