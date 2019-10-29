import React from 'react';
import { AnyAction, Store } from 'redux';
import { render } from '@testing-library/react';
import { FormattedMessage, defineMessages } from 'react-intl';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router-dom';

import MessageProvider from '../index';
import { configureStore } from 'Utils';

import { translationMessages } from '../i18n';

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
  
const messages = defineMessages({
  someMessage: {
    id: 'some.id',
    defaultMessage: 'This is some default message',
    en: 'This is some en message',
  },
});

describe('<LanguageProvider />', () => {
  let store: Store<any, AnyAction>;

  beforeEach(() => {
    store = configureStore(createReducer, {}, browserHistory);
  });

  it('should render its children', () => {
    const text = 'Test';
    const children = <h1>{text}</h1>;
    const { queryByText } = render(
      // tslint:disable-next-line: jsx-wrap-multiline
      <Provider store={store}>
        <MessageProvider messages={messages}>
          {children}
        </MessageProvider>
      </Provider>,
    );
    expect(queryByText(text)).toBeInTheDocument();
  });

  it('should render the default language messages', () => {
    const { queryByText } = render(
      // tslint:disable-next-line: jsx-wrap-multiline
      <Provider store={store}>
        <MessageProvider messages={translationMessages}>
          <FormattedMessage {...messages.someMessage} />
        </MessageProvider>
      </Provider>,
    );
    expect(
      queryByText(messages.someMessage.defaultMessage),
    ).toBeInTheDocument();
  });
});
