import { Props } from 'prop-types';

export namespace IAppHeader {
  export interface IProps extends Props<{}> {
    // Images
    logoImage?: string;
    userImage?: string;

    badgeCount?: number;

    // Callbacks
    menuOnClick?(): void;
    notificationOnClick?(): void;
    userOnClick?(): void;
  }
}
