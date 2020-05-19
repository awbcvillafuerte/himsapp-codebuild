import { makeStyles } from '@material-ui/core/styles';

export const accountsPageStyles = makeStyles(theme => ({
	root: {
        position: 'fixed',
        width: '100%',
        height: '100%',
        zIndex: 9999,
        right: '0px',
        bottom: '0px',
        top: '0px',
        left: '0px',
        textAlign: "center",
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
		
	},
	circular: {
		color: '#3ab77d',
	},
    container:{
        height: '100%',
        outline: 0,
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column'
    },
	mainContainer: {
		padding: '32px 24px 25px'
	},
	main: {
		backgroundColor: '#F5F7FB',
		padding: '32px 24px',
		position: 'relative'
	},
	headMain: {
		// backgroundColor: '#F5F7FB',
	},
	gridContainer: {
		padding: theme.spacing(1),
		paddingBottom: '75px'
	},
	gridContainerNoPadding: {
		padding: theme.spacing(1),
	},
	sectionTitle: {
		fontSize: 24,
		fontWeight: 700,
		color: '#272e4c',
	},
	subSectionTitle: {
		fontSize: 14,
		fontWeight: 400,
		color: '#272e4c',
	},
	editBtn: {
		width: '135px',
		fontSize: '14px',
		color: '#fff',
	},
	alignRight: {
		textAlign: 'right',
	},
	sideBarContainer: {
		borderRight: "1px solid #ccc",
		paddingRight: "25px",
		maxWidth: 250
	},
	contentContainer: {
		paddingLeft: "25px",
	},
	sideBarLists: {
		padding: 0,
		margin: 0,
		listStyle: 'none'
	},
	sideBarLink: {
		color: "#272e4c",
		margin: "0 0 10px",
		display: "block"
	},
	fieldGroupTitle: {
		fontSize: 13,
		fontWeight: 700,
		color: '#272e4c',
	},
	listItemTextRoot: {
		flex: 'none',
	},
	listItemTextPrimarySelected: {
		fontSize: 14,
		fontWeight: 700,
		color: 'rgba(39, 46, 76, 1)',
		cursor: 'pointer',
	},
	listItemTextPrimaryNotSelected: {
		fontSize: 14,
		fontWeight: 700,
		color: 'rgba(39, 46, 76, 0.3)',
		cursor: 'pointer',
	},
	dropzone: {
		width: '460px',
		height: '88px',
		marginTop: '10px',
		marginBottom: '20px',
		border: '2px dashed rgba(30, 32, 113, 0.3)',
		borderRadius: '5px',
		backgroundColor: '#e6e8ee',
		color: '#7b8094',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
	},
	inputLabel: {
		color: '#272e4c',
		fontSize: '12px',
		marginBottom: '5px'
	},
	keyboardDatePicker: {
		marginTop: '10px',
		marginBottom: '20px',
		width: '212px',
	},
	checkbox: {
		'&.Mui-checked': {
			color: '#1e2071',
		},
	},
	radio: {
		'&.Mui-checked': {
			color: '#1e2071',
		},
	},
	appBar: {
		top: 'auto',
		bottom: 0,
		border: '1px solid #707070',
		backgroundColor: 'rgba(54, 54, 54, 0.64)',
		[theme.breakpoints.up('sm')]: {
			width: 'calc(100% - 72px)',
		},
	},
	grow: {
		flexGrow: 1,
	},
	button: {
		margin: '0 10px',
		minHeight: '42px',
		minWidth: '150px',
	},
	buttonTitle: {
		fontWeight: 700,
		fontSize: 13,
	},
	buttonSubTitle: {
		fontWeight: 400,
		fontSize: 7,
	},
	menuList: {
		display: "inline-block",
		padding: "10px 45px 10px 0"
	},
	menuLink: {
		color: "#929292",
		display: "block",
		fontSize: "1.10em",
		'&:hover': {
			color: "#3ab77d",
		}
	},
	LinkActive: {
		color: "#3ab77d",
		fontWeight: "bold",
		textDecoration: "underline"
	},
	userImage: {
		width: theme.spacing(15),
		height: theme.spacing(15),
	},
	listItem: {
		flexDirection: 'column',
		marginBottom: '10px',
		width: 85,
		position: 'fixed',
		bottom: 0
	},
	listItemIcon: {
		minWidth: 0,
	},
	avatar: {
		backgroundColor: 'rgba(158, 164, 172, 0.18)',
	}
}));

export const changePasswordModalStyle = makeStyles(theme => ({
	root: {
        position: 'fixed',
        width: '100%',
        height: '100%',
        zIndex: 9999,
        right: '0px',
        bottom: '0px',
        top: '0px',
        left: '0px',
        textAlign: "center",
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    container2:{
        height: '100%',
        outline: 0,
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column'
    },
	dialog: {},
	dialogAction: {
		marginBottom: theme.spacing(2),
        marginTop: theme.spacing(2),
		justifyContent:'center',
		textAlign: 'center'
	},
	dialogContentContainer: {
        width: '100%'
	},
	container: {
        paddingRight:'15px',
        paddingLeft:'15px',
        width: '450px'
	},
	closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
	},
	dialogTitle: {
        marginTop: theme.spacing(2),
        // marginBottom: theme.spacing(2),
        fontSize: '16px',
        color: '#272E4C',
		fontWeight: 700
	},
	button: {
		margin: '0 10px',
		minHeight: '42px',
		minWidth: '150px'
	},
	inputLabel: {
		color: '#272e4c',
		fontSize: '12px',
		marginBottom: '5px'
	},
	inputTextField: {
		width: '100%',
		marginTop: theme.spacing(1),
		marginBottom: theme.spacing(1),
		paddingRight: 0
	},
	iconEye: {
		color: '#9EA3AC'
	},
	labelNote: {
		color: '#797F92',
		fontSize: 12
	},
	errorMessage: {
		color: '#E53935',
		fontSize: 14
	},
	errorIcon: {
		color: '#E53935',
	},
	buttonCancel: {
		borderColor: '#3ab77d',
		color: '#3ab77d',
		'&:hover': {
			borderColor: '#3ab77d',
			color: '#3ab77d',
			backgroundColor: 'transparent'
		}
	},
	buttonChange: {
		backgroundColor: '#3ab77d',
		'&:hover': {
			backgroundColor: '#3ab77d'
		}
	}
	
}));