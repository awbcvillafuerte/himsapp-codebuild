// #region Global Imports
// #endregion Global Imports

export namespace IChipTextField {
  export interface IProps {
    /**
     * Component id
     */
    id?: string;

    /**
     * Component label
     */
    label: string;

    /**
     * Default/Initial value
     */
    value?: any[];

    /**
     * Has error?
     */
    error?: boolean;

    /**
     * Is multiline (when used as textarea)?
     */
    multiline?: boolean;

    /**
     * Number of rows (when used as textarea)
     */
    rows?: number;

    /**
     * Handles onChange event
     */
    onChange?: (items: any[]) => any;
  }

  export interface IState {}
}
