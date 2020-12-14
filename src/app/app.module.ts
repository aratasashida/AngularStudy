import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UserListItemComponent } from './components/study-refactaring/user-list-item/user-list-item.component';
import { UserListComponent } from './components/study-refactaring/user-list/user-list.component';
import { UserListFilterComponent } from './components/study-refactaring/user-list-filter/user-list-filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserDetailPageComponent } from './components/study-refactaring/user-detail-page/user-detail-page.component';
import { StudyRefactoringComponent } from './components/study-refactaring/study-refactoring.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListItemComponent,
    UserListComponent,
    UserListFilterComponent,
    UserDetailPageComponent,
    StudyRefactoringComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
