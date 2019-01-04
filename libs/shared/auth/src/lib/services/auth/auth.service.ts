import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(): Observable<{}> {
    return of({id: 1, name: 'Michael'});
  }
}
