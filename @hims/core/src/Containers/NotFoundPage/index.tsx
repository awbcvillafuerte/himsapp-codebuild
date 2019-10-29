/**
 * NotFoundPage
 *
 * This is the page shown when the user visits a url that doesn't have a route
 */

import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import messages from './messages';

const Component: React.FC<{}> = (): JSX.Element => {
  return (
    <article>
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
    </article>
  );
};

export default Component;
