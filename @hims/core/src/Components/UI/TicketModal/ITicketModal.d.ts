//#region Global Imports
import { Props } from 'prop-types';
//#endregion Global Imports

declare namespace ITicketModal {
  export interface IProps extends Props<{}> {
    isModalOpen: boolean;
		type : string;
    selectItems : any[];
    onClose: () => void;
    onSubmit: () => void;
  }

  export interface IState {}

  export interface IStateProps {}
}
