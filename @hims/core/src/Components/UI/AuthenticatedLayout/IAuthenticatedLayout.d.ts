import { Props } from 'prop-types';

import { ReactNode } from 'react';

export namespace IAuthenticatedLayout {
  export interface IProps extends Props<{}> {
    children?: ReactNode;
  }
}
