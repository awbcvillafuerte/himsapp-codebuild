// #region Global Imports
import { Props } from 'prop-types';
// #endregion Global Imports

export namespace ISampleCoreComponent {
  export interface IProps extends Props<{}> {
    text: string;
  }

  export interface IState {}
}
