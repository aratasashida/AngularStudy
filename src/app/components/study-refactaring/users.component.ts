import { Component, OnInit } from '@angular/core';
import { UserListUseCase } from '../../service/user-list.usecase';
import { UserListFilter } from '../../models/userState';

@Component({
  selector: 'app-study-refactaring',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users$ = this.userList.users$;
  userListFilter$ = this.userList.filter$;

  constructor(
      private userList: UserListUseCase
  ) {
  }

  ngOnInit() {
    this.userList.fetchUsers().then(r => r);
  }

  setUserListFilter(value: UserListFilter) {
    this.userList.setNameFilter(value.nameFilter);
  }
}
