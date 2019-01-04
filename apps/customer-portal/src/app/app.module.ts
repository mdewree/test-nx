import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  _FEATURE_KEY,
  initialState as InitialState,
  Reducer
} from './+state/.reducer';
import { Effects } from './+state/.effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    StoreModule.forFeature(_FEATURE_KEY, Reducer, {
      initialState: InitialState
    }),
    EffectsModule.forFeature([Effects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
