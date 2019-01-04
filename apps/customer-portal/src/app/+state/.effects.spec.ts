import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';

import { NxModule } from '@nrwl/nx';
import { DataPersistence } from '@nrwl/nx';
import { hot } from '@nrwl/nx/testing';

import { Effects } from './.effects';
import { Load, Loaded } from './.actions';

describe('Effects', () => {
  let actions: Observable<any>;
  let effects: Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NxModule.forRoot(),
        StoreModule.forRoot({}),
        EffectsModule.forRoot([])
      ],
      providers: [Effects, DataPersistence, provideMockActions(() => actions)]
    });

    effects = TestBed.get(Effects);
  });

  describe('load$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: new Load() });
      expect(effects.load$).toBeObservable(hot('-a-|', { a: new Loaded([]) }));
    });
  });
});
