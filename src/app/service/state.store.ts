import { createInitialState, State } from '../models/state';
import { Store, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
@StoreConfig({ name: 'state' })
export class StateStore extends Store<State> {
  constructor() {
    super(createInitialState());
  }
}
