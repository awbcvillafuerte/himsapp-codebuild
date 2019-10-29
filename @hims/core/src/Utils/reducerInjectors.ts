import invariant from 'invariant';
import isEmpty from 'lodash/isEmpty';
import isFunction from 'lodash/isFunction';
import isString from 'lodash/isString';

import checkStore from './checkStore';
import { InjectedStore } from '../Components/Stores';
import { Reducer } from 'redux';

export function injectReducerFactory(
  createReducer: (injectedReducers: any) => any,
  store: InjectedStore,
  isValid: boolean = false,
) {
  // tslint:disable-next-line: only-arrow-functions
  return function injectReducer(key: string, reducer: Reducer<object>) {
    if (!isValid) {
      checkStore(store);
    }

    invariant(
      isString(key) && !isEmpty(key) && isFunction(reducer),
      '(src/Utils...) injectReducer: Expected `reducer` to be a reducer function',
    );

    // tslint:disable-next-line:max-line-length
    // Check `store.injectedReducers[key] === reducer` for hot reloading when a key is the same but a reducer is different
    if (
      Reflect.has(store.injectedReducers, key) &&
      store.injectedReducers[key] === reducer
    ) {
      return;
    }

    store.injectedReducers[key] = reducer;
    store.replaceReducer(createReducer(store.injectedReducers));
  };
}

export function getInjectors(
  createReducer: (injectedReducers: any) => any,
  store: InjectedStore,
) {
  checkStore(store);

  return {
    injectReducer: injectReducerFactory(createReducer, store, true),
  };
}
