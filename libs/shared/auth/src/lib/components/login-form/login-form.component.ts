import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'test-nx-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  @Output() login = new EventEmitter<any>();
}
