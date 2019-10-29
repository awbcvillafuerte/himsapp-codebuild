// #region Global Imports
// #endregion Global Imports

export namespace ITextField {
  export interface IProps {
    /**
     * Component id
     */
    id?: string;

    /**
     * Component label
     */
    label?: string;

    /**
     * Input type.
     */
    type?: string;

    /**
     * Default/Initial value
     */
    value?: string;

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
     * Callback function when value is changed
     */
    onChange?: (value: any) => void;
  }

  export interface IState {}
}
