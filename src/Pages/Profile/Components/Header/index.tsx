import React from 'react'

import {
    Grid,
    Toolbar,
    IconButton,
    Avatar
} from '@material-ui/core'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { logoBase64, base64Image } from '../../base64Default'
import Popper, { PopperPlacementType } from '@material-ui/core/Popper';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';

import { makeStyles } from '@material-ui/styles'

interface IProps {
    profilePic: any
    username: string,
    token: string,
    history?: any
}

const useStyles = makeStyles({
    logo: {
        height: '40px'
    },
    grow: {
        flexGrow: 1,
    },
    logout: {
        padding: '10px 20px',
        display: 'block',
        cursor: 'pointer'
    }
})


export const Header = (props: IProps) => {
    const classes = useStyles()

    const handleClick = (newPlacement: PopperPlacementType) => (
        event: React.MouseEvent<HTMLButtonElement>,
      ) => {
        setAnchorEl(event.currentTarget);
        setOpen((prev) => placement !== newPlacement || !prev);
        setPlacement(newPlacement);
    };

    const onLogout = async () => {

        if (props.token) {
            const options = {
                method: 'POST',
                body: JSON.stringify({access_token: props.token}),
                headers: {
                    'Content-type': 'application/json'
                }
            }
    
            const logout = await fetch(`${process.env.REACT_APP_HIMS_API_CLIENT_URL}/logout`, options)
                .catch(err => console.log(err))
            
            if (logout) {
                // console.log("done logout")
            }
        }

        // console.log("redirect")
        props.history.push('/')
    }
    
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
    const [open, setOpen] = React.useState(false);
    const [placement, setPlacement] = React.useState<PopperPlacementType>();

    return (
        <Grid item xs={12}>
            <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
                {({ TransitionProps }) => (
                <Fade {...TransitionProps} timeout={350}>
                    <Paper>
                        <span className={classes.logout} onClick={onLogout}>Logout</span>
                    </Paper>
                </Fade>
                )}
            </Popper>

            <Toolbar>
                <a href={'/'}>
                    <img
                        src={`data:image/jpeg;base64,${logoBase64}`}
                        className={classes.logo}
                        alt="logo"
                    />
                </a>
                <div className={classes.grow} />
                {
                    props.username
                }
                <Avatar style={{marginLeft: 10}} src={props.profilePic && props.profilePic !== 'DEFAULT_PIC' ? `data:image/jpeg;base64,${props.profilePic}` : `data:image/jpeg;base64,${base64Image}`} alt="avatar" />
                <IconButton edge="end" onClick={handleClick('bottom-end')}> 
                <ExpandMoreIcon />
                </IconButton>
            </Toolbar>
        </Grid>
    )
}