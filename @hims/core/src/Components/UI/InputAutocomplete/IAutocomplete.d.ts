// #region Global Imports
// #endregion Global Imports

export namespace IAutocomplete {
  export interface IProps {
    /**
     * Component id
     */
    id?: string;

    /**
     * TextField component id.
     */
    inputId: string;

    /**
     * Component label
     */
    label: string;

    /**
     * Default/Initial value
     */
    value?: string;

    /**
     * Autocomplete suggestion items
     */
    suggestions: IAutocompleteItem[];

    /**
     * Has error?
     */
    error?: boolean;

    /**
     * Handles onChange event
     */
    onChange?: (option: IAutocompleteItem) => void;
  }

  export interface IState {}

  export interface IAutocompleteItem {
    /**
     * IAutocompleteItem value
     */
    value: string;

    /**
     * IAutocompleteItem label. Used when displaying autocomplete suggestions.
     */
    label: string;
  }
}

export { IAutocomplete };
