import { Action, ActionTypes } from './.actions';

export const _FEATURE_KEY = '';

/**
 * Interface for the '' data used in
 *  - State, and
 *  - Reducer
 *
 *  Note: replace if already defined in another module
 */

/* tslint:disable:no-empty-interface */
export interface Entity {}

export interface State {
  list: Entity[]; // list of ; analogous to a sql normalized table
  selectedId?: string | number; // which  record has been selected
  loaded: boolean; // has the  list been loaded
  error?: any; // last none error (if any)
}

export interface PartialState {
  readonly [_FEATURE_KEY]: State;
}

export const initialState: State = {
  list: [],
  loaded: false
};

export function Reducer(state: State = initialState, action: Action): State {
  switch (action.type) {
    case ActionTypes.Loaded: {
      state = {
        ...state,
        list: action.payload,
        loaded: true
      };
      break;
    }
  }
  return state;
}
