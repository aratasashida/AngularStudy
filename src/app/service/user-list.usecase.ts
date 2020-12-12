import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { User } from '../models/user';
import { Store } from './store.service';
import { UserApiService } from './user-api.service';

@Injectable({
  providedIn: 'root'
})
export class UserListUseCase {

  get users$() {
    return this.userStore
      .select(state => state.userList)
      .pipe(
        map(({ items, filter }) =>
          items.filter(user => (user.first_name + user.last_name).includes(filter.nameFilter))
        )
      );
  }

  get filter$() {
    return this.userStore.select(state => state.userList.filter);
  }

  constructor(
    private userApiService: UserApiService,
    private userStore: Store
  ) { }

  async fetchUsers(): Promise<void> {
    const users = await this.userApiService.getAllUser();

    this.userStore.update(state => ({
      ...state,
      userList: {
        ...state.userList,
        items: users
      }
    }));
  }

  setNameFilter(nameFilter: string) {
    this.userStore.update(state => ({
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
