import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { UserStateStore } from '../store/user-state-store.service';
import { UserApiService } from './user-api.service';
import { UserStateQuery } from '../query/user-state.query';

@Injectable({
    providedIn: 'root'
})
export class UserListUseCase {

    get users$() {
        return this.userStateQuery
            .select(state => state.userList)
            .pipe(
                map(({items, filter}) =>
                    items.filter(user => (user.first_name + user.last_name).includes(filter.nameFilter))
                )
            );
    }

    get filter$() {
        return this.userStateQuery.select(state => state.userList.filter);
    }

    constructor(
        private userApiService: UserApiService,
        private userStateStore: UserStateStore,
        private userStateQuery: UserStateQuery,
    ) {
    }

    async fetchUsers(): Promise<void> {
        const users = await this.userApiService.getAllUser();
        this.userStateStore.update(state => ({
            ...state,
            userList: {
                ...state.userList,
                items: users
            }
        }));
    }

    setNameFilter(nameFilter: string) {
        this.userStateStore.update(state => ({
            ...state,
            userList: {
                ...state.userList,
                filter: {
                    nameFilter
                }
            }
        }));
    }
}
