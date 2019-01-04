import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';

import { PartialState } from './.reducer';
import { Load, Loaded, LoadError, ActionTypes } from './.actions';

@Injectable()
export class Effects {
  @Effect() load$ = this.dataPersistence.fetch(ActionTypes.Load, {
    run: (action: Load, state: PartialState) => {
      // Your custom REST 'load' logic goes here. For now just return an empty list...
      return new Loaded([]);
    },

    onError: (action: Load, error) => {
      console.error('Error', error);
      return new LoadError(error);
    }
  });

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<PartialState>
  ) {}
}
