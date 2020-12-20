import { User } from './user';

export interface UserListFilter {
  nameFilter: string;
}

export interface UserState {
  userList: {
    items: User[];
    filter: UserListFilter;
  };
  userDetail: {
    user: User | null;
  };
}

export function createInitialState(): UserState {
  return {
    userList: {
      items: [],
      filter: {
        nameFilter: '',
      }
    },
    userDetail: {
      user: null
    }
  };
}
