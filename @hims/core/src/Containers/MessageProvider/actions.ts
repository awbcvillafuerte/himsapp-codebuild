/*
 *
 * MessageProvider actions
 *
 */

import ActionTypes from './constants';
import { action } from 'typesafe-actions';

export const changeLocale = (msgLocale: string) =>
  action(ActionTypes.CHANGE_LOCALE, msgLocale);
