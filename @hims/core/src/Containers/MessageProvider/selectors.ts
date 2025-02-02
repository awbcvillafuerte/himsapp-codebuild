import { AnyAction, Store } from 'redux';
import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the languageToggle state domain
 */
const selectLanguage = (state: Store<any, AnyAction> & {language: any;}) => state.language || initialState;

/**
 * Select the language locale
 */

const makeSelectLocale = () => createSelector(selectLanguage, languageState => languageState.locale);

export { selectLanguage, makeSelectLocale };
