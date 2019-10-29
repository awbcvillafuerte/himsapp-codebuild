/*
 *
 * MessageProvider
 *
 * this component connects the redux state message locale to the
 * IntlProvider component and i18n messages (loaded from `src/Translations`)
 */

import React from 'react';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { IntlProvider } from 'react-intl';

import { makeSelectLocale } from './selectors';

export * from './_types';

const stateSelector = createSelector(
  makeSelectLocale(),
  locale => ({
    locale,
  }),
);

export interface IProps {
  messages: { [locale: string]: { [id: string]: string } };
  children?: React.ReactNode;
}

const Provider = (props: IProps): JSX.Element => {
  const { locale } = useSelector(stateSelector);

  return (
    <IntlProvider
      locale={locale}
      key={locale}
      messages={props.messages[locale]}
    >
      {React.Children.only(props.children)}
    </IntlProvider>
  );
};

export { Provider };

export { appLocales, formatTranslationMessages } from './i18n';

export { messageProviderReducer } from './reducer';
