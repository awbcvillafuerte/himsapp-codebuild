//#region Global Imports
import * as React from 'react';

import { AnyAction, Store } from 'redux';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { HashRouter } from 'react-router-dom';
//#endregion Global Imports

//#region Local Imports
//#endregion Local Imports

//#region Interface Imports
//#endregion Interface Imports

import { ThemeProvider } from '@material-ui/styles';
// import { Components } from '@hims/core';

import './document.scss';
// const theme = Components.UI.BaseTheme;

import { createMuiTheme } from '@material-ui/core/styles';

import { history } from '../../Utils';

const theme = createMuiTheme({
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
		fontFamily: '"Usual", "Roboto", "Helvetica", "Arial", sans-serif',
		button: {
			fontFamily: 'Usual, Roboto, Helvetica, Arial, sans-serif',
			fontWeight: 700,
			fontSize: 13,
			textTransform: 'none',
		},
	},
	overrides: {
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
		},
	},
});


export interface IProps<P, S extends Store<any, AnyAction>> {
	Component: React.ComponentType<P>;
	store: S;
	componentProps: P;
}


const Component: {<P, S extends Store<any, AnyAction>>(props: IProps<P, S>): JSX.Element} = (props) => {
	const {Component, store, componentProps} = props;
	return (
		<ThemeProvider theme={theme}>
			<Provider store={store}>
				<ConnectedRouter history={history}>
					<HashRouter basename="/">
						<Component {...componentProps} />
					</HashRouter>
				</ConnectedRouter>
			</Provider>
		</ThemeProvider>
	);
};

export { Component };
