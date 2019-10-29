/**
 * Asynchronously loads the component for HomePage
 */

import React from 'react';
import loadable from 'Utils/loadable';
import LoadingIndicator from '../../Components/UI/LoadingIndicator';

export default loadable(async () => import('./index'), {
  fallback: <LoadingIndicator />,
});
