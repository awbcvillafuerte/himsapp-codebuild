/**
 * Test injectors
 */

import { put } from 'redux-saga/effects';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';

import configureStore from 'Utils/configureStore';
import injectSaga, { useInjectSaga } from '../injectSaga';
import { getInjectors } from '../sagaInjectors';

import { createMemoryHistory } from 'history';

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from 'Utils/history';
function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    router: connectRouter(history),
    ...injectedReducers,
  });

  return rootReducer;
}

const memoryHistory = createMemoryHistory();

// Fixtures
const Component = () => null;

function* testSaga() {
  yield put({ type: 'TEST', payload: 'yup' });
}

jest.mock('../sagaInjectors');
describe('injectSaga decorator', () => {
  let store: any;
  let injectors: any;
  let ComponentWithSaga: any;

  beforeAll(() => {
    const mockedGetInjectors = (getInjectors as unknown) as jest.Mock<
      typeof getInjectors
    >; // compiler doesn't know that it's mocked. So manually cast it.
    mockedGetInjectors.mockImplementation(() => injectors);
  });

  beforeEach(() => {
    store = configureStore(createReducer, {}, memoryHistory);
    injectors = {
      injectSaga: jest.fn(),
      ejectSaga: jest.fn(),
    };
    ComponentWithSaga = injectSaga({
      key: 'test',
      saga: testSaga,
      mode: 'testMode',
    })(Component);
  });

  it('should inject given saga, mode, and props', () => {
    const props = { test: 'test' };
    renderer.create(
      // tslint:disable-next-line: jsx-wrap-multiline
      <Provider store={store}>
        <ComponentWithSaga {...props} />
      </Provider>,
    );

    expect(injectors.injectSaga).toHaveBeenCalledTimes(1);
    expect(injectors.injectSaga).toHaveBeenCalledWith(
      'test',
      { saga: testSaga, mode: 'testMode' },
      props,
    );
  });

  it('should eject on unmount with a correct saga key', () => {
    const props = { test: 'test' };
    const renderedComponent = renderer.create(
      // tslint:disable-next-line: jsx-wrap-multiline
      <Provider store={store}>
        <ComponentWithSaga {...props} />
      </Provider>,
    );
    renderedComponent.unmount();

    expect(injectors.ejectSaga).toHaveBeenCalledTimes(1);
    expect(injectors.ejectSaga).toHaveBeenCalledWith('test');
  });

  it('should set a correct display name', () => {
    expect(ComponentWithSaga.displayName).toBe('withSaga(Component)');
    expect(
      injectSaga({ key: 'test', saga: testSaga })(() => null).displayName,
    ).toBe('withSaga(Component)');
  });

  it('should propagate props', () => {
    const props = { testProp: 'test' };
    const renderedComponent = renderer.create(
      // tslint:disable-next-line: jsx-wrap-multiline
      <Provider store={store}>
        <ComponentWithSaga {...props} />
      </Provider>,
    );
    const {
      props: { children },
    } = renderedComponent.getInstance();
    expect(children.props).toEqual(props);
  });
});

describe('useInjectSaga hook', () => {
  let store: any;
  let injectors: any;
  let ComponentWithSaga: any;

  beforeAll(() => {
    const mockedGetInjectors = (getInjectors as unknown) as jest.Mock<
      typeof getInjectors
    >; // compiler doesn't know that it's mocked. So manually cast it.
    mockedGetInjectors.mockImplementation(() => injectors);
  });

  beforeEach(() => {
    store = configureStore(createReducer, {}, memoryHistory);
    injectors = {
      injectSaga: jest.fn(),
      ejectSaga: jest.fn(),
    };
    ComponentWithSaga = () => {
      useInjectSaga({
        key: 'test',
        saga: testSaga,
        mode: 'testMode',
      });
      return null;
    };
  });

  it('should inject given saga and mode', () => {
    const props = { test: 'test' };
    render(
      // tslint:disable-next-line: jsx-wrap-multiline
      <Provider store={store}>
        <ComponentWithSaga {...props} />
      </Provider>,
    );

    expect(injectors.injectSaga).toHaveBeenCalledTimes(1);
    expect(injectors.injectSaga).toHaveBeenCalledWith('test', {
      saga: testSaga,
      mode: 'testMode',
    });
  });

  it('should eject on unmount with a correct saga key', () => {
    const props = { test: 'test' };
    const { unmount } = render(
      // tslint:disable-next-line: jsx-wrap-multiline
      <Provider store={store}>
        <ComponentWithSaga {...props} />
      </Provider>,
    );
    unmount();

    expect(injectors.ejectSaga).toHaveBeenCalledTimes(1);
    expect(injectors.ejectSaga).toHaveBeenCalledWith('test');
  });
});
