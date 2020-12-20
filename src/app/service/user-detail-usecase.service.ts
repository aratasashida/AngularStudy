import { Injectable } from '@angular/core';
import { UserApiService } from './user-api.service';
import { StateStore } from './state-store.service';

@Injectable({
  providedIn: 'root',
})
export class UserDetailUseCase {
  get user$() {
    return this.store.select((state) => state.userDetail.user);
  }

  constructor(private userApiService: UserApiService, private store: StateStore) {}

  async fetchUser(userId: string) {
    this.store.update((state) => ({
      ...state,
      userDetail: {
        ...state.userDetail,
        user: null,
      },
    }));

    const user = await this.userApiService.getUserById(userId);

    this.store.update((state) => ({
      ...state,
      userDetail: {
        ...state.userDetail,
        user,
      },
    }));
  }
}
