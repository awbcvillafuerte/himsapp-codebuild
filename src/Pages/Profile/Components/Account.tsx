import * as React from 'react';
import {
    Grid,
    Typography,
    Link,
} from '@material-ui/core';
import { ChangePassword } from './ChangePassword'
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment'


const useStyles = makeStyles(() => ({
    label: {
        color: '#272E4C',
        fontSize: 12,
        opacity: .6
    },
    value: {
        color: '#272E4C',
        fontSize: 16,
        fontWeight: 800
    },
    linkAction: {
        color: '#3AB77D',
        textDecoration: 'underline',
        fontSize: 12,
        cursor: 'pointer'
    }
}));

export interface IAccountsProps {
    userData: any,
    userIdDb: string,
    otherRoles?: any,
    setLoading: any
}

export const Account: React.FC<IAccountsProps> = (props: IAccountsProps): JSX.Element => {
    const classes = useStyles();
    const [ChangePasswordModalVisibility, setChangePasswordModalVisibility] = React.useState(false)

    const openChangePasswordModal = () => {
        setChangePasswordModalVisibility(true)
    }

    return (
        <>
            <Grid container spacing={5}>
                <Grid item xs={12}>
                    <Typography><b>ACCOUNT</b></Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography className={classes.label}>USERNAME</Typography>
                    <Typography className={classes.value}>{props.userData.username ? props.userData.username : "N/A"}</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography className={classes.label}>PRIMARY ROLE AND MODULE</Typography>
                    {/* <Typography className={classes.value}>{props.userData.main_role && props.userData.main_role.name + " - " + props.userData.main_module}</Typography> */}
                    <Typography className={classes.value}>NONE</Typography>
                </Grid>
            </Grid>
            <Grid container spacing={5}>
                <Grid item xs={6}>
                    <Typography className={classes.label}>EMAIL</Typography>
                    <Typography className={classes.value}>{props.userData.email ? props.userData.email : "N/A"}</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography className={classes.label}>USER GROUP</Typography>
                    <Typography className={classes.value}>{props.userData.group == null || undefined ? "N/A" : props.userData.group.name}</Typography>
                </Grid>
            </Grid>
            <Grid container spacing={5}>
                <Grid item xs={6}>
                    <Typography className={classes.label}>PASSWORD</Typography>
                    <Typography className={classes.value}>{"*****"}</Typography>
                    {
                        props.userIdDb === props.userData._id &&
                        <>
                            <Link className={classes.linkAction} onClick={() => {
                                openChangePasswordModal()
                            }}>Change Password</Link>
                            <ChangePassword
                                setLoading={props.setLoading}
                                userId={props.userData.user_id}
                                visible={ChangePasswordModalVisibility}
                                onClose={() => { setChangePasswordModalVisibility(false) }} />
                        </>
                    }

                </Grid>
                <Grid item xs={6}>
                    <Typography className={classes.label}>ROLES FROM USER GROUPS</Typography>
                    <Typography className={classes.value}><u>
                        {
                            props.userData.hasOwnProperty('group_roles') ? props.userData.group_roles.length > 0 ?
                                props.userData.group_roles.map((d: any, i: any) =>
                                    `${d.name}${i !== (props.userData.group_roles.length - 1) ? ', ' : ''}`
                                ) : 'N/A' : 'N/A'
                        }
                    </u></Typography>
                </Grid>
            </Grid>
            <Grid container spacing={5}>
                <Grid item xs={6}>
                    <Typography className={classes.label}>STATUS</Typography>
                    <Typography className={classes.value}><b>{props.userData.is_locked && props.userData.is_locked ? "Locked" : "Unlocked"}</b></Typography>
                    {/* <Typography className={classes.linkAction}>Lock</Typography>
                        {props.userData.is_locked ? <Link>Unlock User</Link> : null} */}
                </Grid>
                <Grid item xs={6}>
                    <Typography className={classes.label}>OTHER ROLES</Typography>
                    <Typography className={classes.value}>
                        <u>
                            {
                                props.userData.hasOwnProperty('roles') ? props.userData.roles.length > 0 ?
                                    props.userData.roles.map((d: any, i: any) =>
                                        `${d.name}${i !== (props.userData.roles.length - 1) ? ', ' : ''}`
                                    ) : 'N/A' : 'N/A'
                            }
                        </u>
                    </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={5}>
                <Grid item xs={3}>
                    <Typography className={classes.label}>SUPERVISOR</Typography>
                    {
                        props.userData.reports_to ?
                            <>
                                <Typography className={classes.value}>{props.userData.reports_to.first_name} {props.userData.reports_to.last_name}</Typography>
                                <Typography style={{ color: 'rgba(60, 57, 74, 0.7)' }}><small><b>{props.userData.reports_to.job_title ? props.userData.reports_to.job_title : 'N/A'}</b></small></Typography>
                                <Typography style={{ color: 'rgba(60, 57, 74, 0.7)' }}><small><i>{props.userData.reports_to.employee_id ? props.userData.reports_to.employee_id : 'N/A'}</i></small></Typography>
                            </>
                            : <Typography className={classes.value}>N/A</Typography>
                    }
                </Grid>
            </Grid>
            <Grid container spacing={5} style={{ paddingBottom: 30 }}>
                <Grid item xs={3}>
                    <Typography className={classes.label}>EFFECTIVITY DATE</Typography>
                    <Typography className={classes.value}>{props.userData.effectivity_date ? moment(props.userData.effectivity_date).format('MMM DD, YYYY') : 'N/A'}</Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography className={classes.label}>EXPIRY DATE (If applicable)</Typography>
                    <Typography className={classes.value}>{props.userData.expiry_date ? moment(props.userData.expiry_date).format('MMM DD, YYYY') : 'N/A'}</Typography>
                </Grid>
            </Grid>

            <Grid container spacing={5}>
                <Grid item xs={12}>
                    <Typography><b>PROFILE</b></Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography className={classes.label}>FIRST NAME</Typography>
                    <Typography className={classes.value}>{props.userData.first_name ? props.userData.first_name : "N/A"}</Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography className={classes.label}>MIDDLE NAME</Typography>
                    <Typography className={classes.value}>{props.userData.middle_name ? props.userData.middle_name : "N/A"}</Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography className={classes.label}>LAST NAME</Typography>
                    <Typography className={classes.value}>{props.userData.last_name ? props.userData.last_name : "N/A"}</Typography>
                </Grid>
            </Grid>
            <Grid container spacing={5}>
                <Grid item xs={3}>
                    <Typography className={classes.label}>EMPLOYEE ID NUMBER</Typography>
                    <Typography className={classes.value}>{props.userData.employee_id ? props.userData.employee_id : "N/A"}</Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography className={classes.label}>DEPARTMENT</Typography>
                    <Typography className={classes.value}>{props.userData.department ? props.userData.department.name : "N/A"}</Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography className={classes.label}>JOB POSITION / RANK</Typography>
                    <Typography className={classes.value}>{props.userData.job_title ? props.userData.job_title : "N/A"}</Typography>
                </Grid>
            </Grid>
            <Grid container spacing={5}>
                <Grid item xs={3}>
                    <Typography className={classes.label}>SECTION</Typography>
                    <Typography className={classes.value}>{props.userData.section ? props.userData.section : "N/A"}</Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography className={classes.label}>LOCATION</Typography>
                    <Typography className={classes.value}>{props.userData.location ? props.userData.location : "N/A"}</Typography>
                </Grid>
            </Grid>
            {/* BEGIN MODALS */}

        </>
    )
}