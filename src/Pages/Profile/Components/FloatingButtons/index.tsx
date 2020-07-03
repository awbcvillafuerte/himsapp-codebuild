import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';

interface FloatingButtonsProps {
    leftButtons?: any | null;
    rightButtons?: any | null;

}

const useStyles = makeStyles(theme => ({
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
}));

const FloatingButtons = (
    props: FloatingButtonsProps,
  ): JSX.Element => {
    // const buttonclasses = ButtonStyle();
    const classes = useStyles();
    return (
        <Grid container>
			<Grid item xs={12}>
				<AppBar className={classes.appBar}>
					<Toolbar>
                        {props.rightButtons}
						<div className={classes.grow}></div>
						{props.leftButtons}
					</Toolbar>
				</AppBar>
			</Grid>
		</Grid>
    )
}

FloatingButtons.defaultProps = {
    leftButtons: null,
    rightButtons: null
}

export default FloatingButtons;