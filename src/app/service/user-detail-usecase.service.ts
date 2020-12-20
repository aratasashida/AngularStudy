import { Injectable } from '@angular/core';
import { UserApiService } from './user-api.service';
import { StateStore } from './state.store';

@Injectable({
  providedIn: 'root',
})
export class UserDetailUseCase {
  get user$() {
    return this.stateStore._select((state) => state.userDetail.user);
  }

  constructor(private userApiService: UserApiService, private stateStore: StateStore) {}

  async fetchUser(userId: string) {
    this.stateStore.setLoading(true);
    const user = await this.userApiService.getUserById(userId);
    this.stateStore.update((state) => ({
      ...state,
      userDetail: {
        ...state.userDetail,
        user,
      },
    }));
    this.stateStore.setLoading(false);
  }
}
