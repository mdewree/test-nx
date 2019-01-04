import { Action } from '@ngrx/store';
import { Entity } from './.reducer';

export enum ActionTypes {
  Load = '[] Load ',
  Loaded = '[]  Loaded',
  LoadError = '[]  Load Error'
}

export class Load implements Action {
  readonly type = ActionTypes.Load;
}

export class LoadError implements Action {
  readonly type = ActionTypes.LoadError;
  constructor(public payload: any) {}
}

export class Loaded implements Action {
  readonly type = ActionTypes.Loaded;
  constructor(public payload: Entity[]) {}
}

export type Action = Load | Loaded | LoadError;

export const fromActions = {
  Load,
  Loaded,
  LoadError
};
