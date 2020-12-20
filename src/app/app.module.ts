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
import { UsersComponent } from './components/study-refactaring/users.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { StudyRxjsComponent } from './components/study-rxjs/study-rxjs.component';
import { ExplicitSubscribeComponent } from './components/study-rxjs/explicit-subscribe/explicit-subscribe.component';
import { AsyncpipeComponent } from './components/study-rxjs/asyncpipe/asyncpipe.component';
import { NG_ENTITY_SERVICE_CONFIG } from '@datorama/akita-ng-entity-service';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    UserListItemComponent,
    UserListComponent,
    UserListFilterComponent,
    UserDetailPageComponent,
    UsersComponent,
    PageNotFoundComponent,
    StudyRxjsComponent,
    ExplicitSubscribeComponent,
    AsyncpipeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    environment.production ? [] : AkitaNgDevtools.forRoot(),
    AkitaNgRouterStoreModule
  ],
  providers: [{ provide: NG_ENTITY_SERVICE_CONFIG, useValue: { baseUrl: 'https://jsonplaceholder.typicode.com' }}],
  bootstrap: [AppComponent]
})
export class AppModule { }
