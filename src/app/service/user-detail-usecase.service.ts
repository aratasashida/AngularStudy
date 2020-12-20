import { Injectable } from '@angular/core';
import { UserApiService } from './user-api.service';
import { UserStateStore } from '../store/user-state-store.service';
import { UserStateQuery } from '../query/user-state.query';

@Injectable({
    providedIn: 'root',
})
export class UserDetailUseCase {
    get user$() {
        return this.userStateQuery.select((state) => state.userDetail.user);
    }

    constructor(
        private userApiService: UserApiService,
        private userStateStore: UserStateStore,
        private userStateQuery: UserStateQuery
    ) {}

    async fetchUser(userId: string) {
        this.userStateStore.setLoading(true);
        const user = await this.userApiService.getUserById(userId);
        this.userStateStore.update((state) => ({
            ...state,
            userDetail: {
                ...state.userDetail,
                user,
            },
        }));
        this.userStateStore.setLoading(false);
    }
}
