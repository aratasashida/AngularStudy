import { User } from './user';

export interface UserListFilter {
  nameFilter: string;
}

export interface State {
  userList: {
    items: User[];
    filter: UserListFilter;
  };
  userDetail: {
    user: User | null;
  };
}

export function createInitialState(): State {
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
