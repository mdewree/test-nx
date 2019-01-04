import { AuthAction, AuthActionTypes } from './auth.actions';

export const AUTH_FEATURE_KEY = 'auth';

/* tslint:disable:no-empty-interface */
export interface Entity { }

export interface AuthState {
  auth: any,
  loaded: boolean;
}

export interface AuthPartialState {
  readonly [AUTH_FEATURE_KEY]: AuthState;
}

export const initialState: AuthState = {
  auth: null,
  loaded: false
};

export function authReducer(state: AuthState = initialState, action: AuthAction): AuthState {
  switch (action.type) {
    case AuthActionTypes.LoginSuccess: {
      return { ...state, auth: action.payload };
    }
    default: {
      return state;
    }
  }
};
