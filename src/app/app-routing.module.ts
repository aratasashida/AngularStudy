import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserDetailPageComponent } from './components/study-refactaring/user-detail-page/user-detail-page.component';
import { StudyRefactoringComponent } from './components/study-refactaring/study-refactoring.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'study-refactaring',
        children: [
          {
            path: 'users',
            component: StudyRefactoringComponent
          },
          {
            path: 'users/:userId',
            component: UserDetailPageComponent
          }
        ]
      },
      {
        path: '**', component: PageNotFoundComponent
      },
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
