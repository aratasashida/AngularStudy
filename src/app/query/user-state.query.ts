import { Query } from '@datorama/akita';
import { UserState } from '../models/userState';
import { UserStateStore } from '../store/user-state-store.service';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UserStateQuery extends Query<UserState> {
    constructor(protected userStateStore: UserStateStore) {
        super(userStateStore);
    }
}
