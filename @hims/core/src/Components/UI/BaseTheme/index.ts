import { createMuiTheme } from '@material-ui/core/styles';

const BaseTheme = createMuiTheme({
	palette: {
		primary: {
			main: '#3ab77d',
			contrastText: '#ffffff',
		},
		secondary: {
			main: '#ffffff',
			contrastText: '#3ab77d',
		},
	},
	typography: {
		fontFamily: 'Usual, Roboto, Helvetica, Arial, sans-serif',
		button: {
			fontFamily: 'Usual, Roboto, Helvetica, Arial, sans-serif',
			fontWeight: 700,
			fontSize: 13,
			textTransform: 'none',
		}
	},
	overrides: {
		MuiDialog: {
			root: {
				width:'100%'
			}
		},
		MuiDialogTitle:{
			root:{
				fontFamily: 'Usual, Roboto, Helvetica, Arial, sans-serif',
				fontWeight: 550,
				fontSize:'1em',
				color: '#272E4C'
			}
		},
		MuiDialogContentText:{
			root:{
				fontSize:'.8em',
				color: '#272E4C'
			}
		},
		MuiFormControlLabel:{
			label:{
				fontSize:'.8em',
				color: '#272E4C'
			}
		},
		MuiIconButton :{
			root: {
				fontSize:'.9em'
			}
		},
		MuiButton: {
			containedPrimary: {
				boxShadow: '0px 3px 6px #1e207129',
				'&:hover': {
					backgroundColor: '#008650',
				},
			},
			containedSecondary: {
				border: '1px solid #0000001A',
				boxShadow: '0px 1px 3px #00000033',
				'&:hover': {
					backgroundColor: '#3ab77d1a',
				},
			},
			outlinedSecondary: {
				border: '1px solid #3ab77d',
				boxShadow: '0px 1px 3px #00000033',
				'&:hover': {
					backgroundColor: '#3ab77d1a',
				},
			},
		},
	},
});

export default BaseTheme;
