//#region Global Imports
import * as React from 'react';
import { useState } from 'react';
import {
    Grid,
    IconButton,
    Avatar,
    CircularProgress,
    List,
    ListItem,
    ListItemIcon,
    ListItemText
} from '@material-ui/core';
import { Account } from './Components/Account';
import { SubHeader } from './Components/SubHeader';
import { accountsPageStyles } from './style';
import StorageService from './storage';
import { withRouter } from 'react-router-dom';
import { base64Image } from './base64Default';
import { Header } from './Components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBookOpen
} from '@fortawesome/free-solid-svg-icons';

import { MsgModal } from './Components/MsgModal'

const ProfilePage = (props: any): JSX.Element => {

    const classes = accountsPageStyles();
    const [name, setName] = useState("");
    const [loading, setLoading] = useState(false);
    const [userData, setUserData] = useState<any>([]);
    const [userIdDb, setUserIdDb] = useState('');
    const [token, setToken] = useState('');


    React.useEffect(() => {
        StorageService('user_data', 'user_id').then((data: any) => {
            setUserIdDb(data.result)
        }).catch((err: any) => {
            console.log(err);
            setLoading(false);
            props.history.push('/')
            return false;
        })

        setLoading(true)

        StorageService('user_data', 'access_token').then(({result}: any) => {
            setToken(result)
            fetch(`${process.env.REACT_APP_HIMS_API_CLIENT_URL}profile`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${result}`
                }
            }).then(async (data: any) => {
                let jsondata = await data.json();
                if (!jsondata.error) {
                    setName(jsondata.body.first_name + " " + jsondata.body.last_name)
                    setUserData(jsondata.body);
                    setModal(true)
                } else {
                    props.history.push('/')
                    console.log(jsondata.err.message)
                }
                setLoading(false)
            }).catch((err: any) => {
                setLoading(false)
                props.history.push('/')
                console.log(err)
            })
        }).catch((err: any) => {
            props.history.push('/')
            console.log('There was an error retrieving token in indexeddb: ', err);
        })
        
    }, [props.history]);

    const breadCrumbs = [
        {
            name: "ACCOUNT",
            link: "/system-admin/users"
        },
    ];

    const handleDoneClose = () => {
        setModal(false)
    }

    const [modal, setModal] = React.useState(false)

    return (
        <>
            <Grid container>
                <Grid item xs={1} style={{maxWidth: 85, backgroundColor: '#1E2071'}}>
                    <List style={{position: 'relative'}}>
                        <ListItem
                            button
                            className={classes.listItem}>
                            <ListItemIcon className={classes.listItemIcon}>
                                <Avatar className={classes.avatar}>
                                <FontAwesomeIcon icon={faBookOpen} />
                                </Avatar>
                            </ListItemIcon>
                            <ListItemText
                                primary="Help"
                                disableTypography
                                style={{color: '#fff', fontSize: 9}} />
                            </ListItem>
                    </List>
                </Grid>
                <Grid item xs={11} style={{
                    maxWidth: 'calc(100% - 85px)',
                    flexBasis: 'calc(100% - 85px)'
                }}>
                    <Header {...props} token={token} username={userData.username} profilePic={userData.profile_pic} />
                    <SubHeader
                        headingTitle={name}
                        breadCrumbsArray={breadCrumbs}
                        layoutType={'layout_1'}
                    // enableButton={false}
                    ></SubHeader>
                    <div className={classes.main}>
                        {loading ?
                            ( 
                                <div className={classes.root}>
                                    <div className={classes.container}>
                                        <CircularProgress className={classes.circular} size={150}/>
                                    </div>
                                </div>
                            ) : null
                        }
                        <Grid container xs={12}>
                            <Grid item xs={3} className={classes.sideBarContainer}>
                                <IconButton edge="end" onClick={() => { }}>
                                    <Avatar
                                        className={classes.userImage}
                                        src={userData.profile_pic !== 'DEFAULT_PIC' ? `data:image/jpeg;base64,${userData.profile_pic}` : `data:image/jpeg;base64,${base64Image}`}
                                        alt="avatar" />
                                </IconButton>
                            </Grid>
                            <Grid item xs={9} className={classes.contentContainer}>
                                {
                                    <Account
                                        setLoading={setLoading}
                                        userData={userData}
                                        userIdDb={userIdDb}
                                    ></Account>
                                }
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
                <MsgModal
                    isModalOpen={modal}
                    onClose={handleDoneClose}
                    title={'You currently have no role/s'}
                    message={'Please contact your supervisor or your administrator for assistance.'}
                />
            </Grid>
        </>
    );
}

export default withRouter(ProfilePage)
