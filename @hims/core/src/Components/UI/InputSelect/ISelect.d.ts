// #region Global Imports
// #endregion Global Imports

export namespace ISelect {
  export interface IProps {
    /**
     * Component id
     */
    id: string;

		/**
		 * Component label
		 */
		label?: string;

    /**
     * Array of ISelectItem to be displayed as options
     */
    data: ISelectItem[];

    /**
     * Default select value
     */
    value?: string;

    /**
     * Has error?
     */
    error?: boolean;

    /**
     * Is required?
     */
    required?: boolean;

    /**
     * Handles onChange event
     */
    onChange?: (value: any) => void;

    /**
     * Custom function for displaying select options
     */
    displaySelectItem?: (selectItem: ISelectItem) => JSX.Element;
  }

  export interface IState {}

  export interface ISelectItem {
    /**
     * ISelectItem ID
     */
    id: number;

    /**
     * ISelectItem value
     */
    value: string;

    /**
     * ISelectItem label. Used when displaying select options.
     */
    label: string;
  }
}
