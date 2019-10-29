/*
 *
 * MessageProvider reducer
 *
 */
import ActionTypes from './constants';
import { ContainerState, ContainerActions } from './_types';
import { DEFAULT_LOCALE } from './constants';

export const initialState: ContainerState = {
  locale: DEFAULT_LOCALE,
};

function messageProviderReducer(
  state: ContainerState = initialState,
  action: ContainerActions,
): ContainerState {
  switch (action.type) {
    case ActionTypes.CHANGE_LOCALE:
      return {
        locale: action.payload,
      };
    default:
      return state;
  }
}
export { messageProviderReducer };
