import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserDetailPageComponent } from './components/study-refactaring/user-detail-page/user-detail-page.component';
import { UsersComponent } from './components/study-refactaring/users.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { StudyRxjsComponent } from './components/study-rxjs/study-rxjs.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'study-refactaring',
        children: [
          {
            path: 'users',
            component: UsersComponent
          },
          {
            path: 'users/:userId',
            component: UserDetailPageComponent
          }
        ]
      },
      {
        path: 'study-rxjs',
        component: StudyRxjsComponent
      },
      {
        path: '**', component: PageNotFoundComponent
      },
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
