// #region Global Imports
import React from 'react';
// #endregion Global Imports

// #region Local Imports
// import * as styles from './index.scss';
import styles from './index.scss';
// #endregion Local Imports

// #region Interface Imports
import { ISampleCoreComponent } from './ISampleCoreComponent';
// #endregion Interface Imports

export class SampleCoreComponent extends React.Component<
  ISampleCoreComponent.IProps,
  ISampleCoreComponent.IState
> {
  public render(): JSX.Element {
    const { text } = this.props;
    return (
      <div className={styles.title}>
        <span className={styles.titleBack}>{text}</span>
        <span className={styles.titleFront}>{text}</span>
      </div>
    );
  }
}
