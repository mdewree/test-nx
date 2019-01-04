import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthState } from '../../+state/auth.reducer';
import * as authActions from '../../+state/auth.actions';

@Component({
  selector: 'test-nx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private store: Store<AuthState>) { }

  ngOnInit() { }

  login () {
    this.store.dispatch(new authActions.LoginAction())
  }

}
