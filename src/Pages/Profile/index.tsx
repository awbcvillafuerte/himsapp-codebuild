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
	ListItemText,
	Modal,
	Button,
	Fade,
	Link,
	Backdrop
} from '@material-ui/core';
import { Account } from './Components/Account';
import { SubHeader } from './Components/SubHeader';
import { accountsPageStyles } from './style';
import StorageService from './storage';
import { withRouter } from 'react-router-dom';
import { base64Image } from './base64Default';
import { Header } from './Components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import CreateIcon from '@material-ui/icons/Create'
import {
  faBookOpen
} from '@fortawesome/free-solid-svg-icons';

import { MsgModal } from './Components/MsgModal'
import { ImageCropper } from './Components/ProfilePicCropper'
import FloatingButtons from './Components/FloatingButtons'
import IndexedDbHelper from '../Login/IndexedDbHelper'

const storage = new IndexedDbHelper()

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
		let urlApp = localStorage.getItem('CLIENT_URL') ? localStorage.getItem('CLIENT_URL') : process.env.REACT_APP_HIMS_API_CLIENT_URL

		setLoading(true)

		StorageService('user_data', 'access_token').then(({result}: any) => {
			setToken(result)
			fetch(`${urlApp}profile`, {
				method: 'GET',
				headers: {
					'Authorization': `Bearer ${result}`
				}
			}).then(async (data: any) => {
				let jsondata = await data.json();
				if (!jsondata.error) {
					setName(jsondata.body.first_name + " " + jsondata.body.last_name)
					setUserData(jsondata.body);
					setOriginalData(jsondata.body)
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

	const handleUpload = (imgBase64: any) => {
		setUserData({
		  ...userData,
		  profile_pic: (imgBase64 as string).split(',')[1]
		})
		setUploadModal(false)
	}

	const openUploadModal = () => {
		setUploadModal(true)
	}

	const closeUploadModal = () => {
		setUploadModal(false)
		setUserData(originalData)
		setTemp64(null)
	}

	const handleAccountPhoto = (event: any) => {
		const validFiles = ['image/jpeg', 'image/jpg,', 'image/png'];
	
		if (validFiles.includes(event[0].type)) {
			let reader = new FileReader();
			reader.readAsDataURL(event[0]);
			reader.onload = () => {
			  setTemp64(reader.result)
		  };
		} else {
			alert("Invalid file extension.")
		}
	};

	const updateProfile = async () => {
		setLoading(true)

		let update = await fetch(`${process.env.REACT_APP_HIMS_API_CLIENT_URL}/users/profile_pic`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
			},
			body: JSON.stringify({profile_pic: userData.profile_pic})
		}).catch((err: any) => alert(err))

		if (update) {
			let jsonData = await update.json()

			storage.openDb('himsDb').then((res: any) => {
				storage.updateSinglePropertyByKey(res.result, 'user_data', 'profile_pic', jsonData.profile_pic).then(() => {
					// save success
					setModalProps({
						...modalProps,
						open: true,
						title: 'Changes Save',
						message: 'Your profile picture has been change',
						onClose: () => window.location.reload()
					})
				}).catch(() => {
					setModalProps({
						...modalProps,
						open: true,
						title: 'Error',
						message: '',
						onClose: () => {setModalProps({...modalProps, open: false})}
					})
				})
			}).catch(() => {
				setModalProps({
					...modalProps,
					open: true,
					title: 'Error',
					message: '',
					onClose: () => {setModalProps({...modalProps, open: false})}
				})
			})
		}

		setLoading(false)
	}

	const [uploadModal, setUploadModal] = React.useState(false);
	const [temp64, setTemp64] = React.useState<any>(null);
	const [originalData, setOriginalData] = React.useState<any>({});
	const [modalProps, setModalProps] = React.useState<any>({
		open: false,
		title: '',
		message: '',
		onClose: () => {}
	});

	const [modal, setModal] = React.useState(false)

	return (
		<>
			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				className={classes.modal}
				open={uploadModal}
				onClose={closeUploadModal}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}>
              	<Fade in={uploadModal}>
					<div className={classes.paper}>
						<List>
							<ListItemText>
							<Link
								className={classes.closeButton}
								onClick={closeUploadModal}>
								<FontAwesomeIcon icon={faTimes} />
							</Link>
							</ListItemText>
						</List>
						<p id="transition-modal-title"
							style={{ fontSize: "20px" }}>
							<b>Upload Picture</b>
						</p>
						<ImageCropper
							onUpoad={handleUpload}
							photo={temp64}
							handleAccountPhoto={handleAccountPhoto}
							classes={classes}
							classes2={classes}
							setPhoto={setTemp64}
							closeUploadModal={closeUploadModal} />
					</div>
              	</Fade>
            </Modal>
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
									<span
										onClick={openUploadModal}
										className={classes.editIconContainer}>
										<CreateIcon className={classes.editIcon} />
									</span>
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

			{
				temp64 && temp64 !== null &&
				<FloatingButtons
					rightButtons={
						<Grid item xs={12} className={classes.userAlignRight}>
							<Button
								onClick={() => { setTemp64(null); setUserData(originalData); }}
								className={classes.cancelAdd}
								variant="contained" color="primary">
								Cancel
							</Button>
							<Button
								onClick={updateProfile}
								className={classes.saveButton}
								variant="contained" color="primary">
								Save Changes
							</Button>
						</Grid>
					} />
			}

			<MsgModal
				isModalOpen={modalProps.open}
				onClose={modalProps.onClose}
				title={modalProps.title}
				message={modalProps.message} />
		</>
	);
}

export default withRouter(ProfilePage)