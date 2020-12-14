import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { User } from '../../../models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {

  @Input()
  users!: User[];
}
