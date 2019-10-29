import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.NotFoundPage';

const messages = defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Page not found.',
  },
});

export default messages;
