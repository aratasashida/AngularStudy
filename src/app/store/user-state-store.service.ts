import { createInitialState, UserState } from '../models/userState';
import { Store, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
@StoreConfig({ name: 'state' })
export class UserStateStore extends Store<UserState> {
  constructor() {
    super(createInitialState());
  }
}
