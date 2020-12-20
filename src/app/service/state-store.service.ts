import { Injectable } from '@angular/core';
import { BehaviorSubject, queueScheduler } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { initialState, State } from '../models/state';

@Injectable({ providedIn: 'root' })
export class StateStore {
  private state$ = new BehaviorSubject<State>(initialState);

  update(fn: (state: State) => State) {
    const current = this.state$.value;
    queueScheduler.schedule(() => {
      this.state$.next(fn(current));
    });
  }

  select<T>(selector: (state: State) => T) {
    return this.state$.pipe(
      map(selector),
      distinctUntilChanged(),
    );
  }
}
