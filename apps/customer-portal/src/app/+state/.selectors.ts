import { createFeatureSelector, createSelector } from '@ngrx/store';
import { _FEATURE_KEY, State } from './.reducer';

// Lookup the '' feature state managed by NgRx
const getState = createFeatureSelector<State>(_FEATURE_KEY);

const getLoaded = createSelector( getState, (state:State) => state.loaded );
const getError = createSelector( getState, (state:State) => state.error );

const getAll = createSelector( getState, getLoaded, (state:State, isLoaded) => {
  return isLoaded ? state.list : [ ];
});
const getSelectedId = createSelector( getState, (state:State) => state.selectedId );
const getSelected = createSelector( getAll, getSelectedId, (, id) => {
    const result = .find(it => it['id'] === id);
    return result ? Object.assign({}, result) : undefined;
});

export const Query = {
  getLoaded,
  getError,
  getAll,
  getSelected
};
