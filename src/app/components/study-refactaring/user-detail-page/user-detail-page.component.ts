import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { distinctUntilChanged, map, takeUntil } from 'rxjs/operators';
import { UserDetailUseCase } from '../../../service/user-detail-usecase.service';
import { UserStateQuery } from '../../../query/user-state.query';
import { combineLatest, Observable } from 'rxjs';
import { User } from '../../../models/user';

type UserDetailPageComponentState = {
  user: User | null,
  isLoading: boolean
};

@Component({
  templateUrl: './user-detail-page.component.html',
  styleUrls: ['./user-detail-page.component.scss'],
})
export class UserDetailPageComponent implements OnInit, OnDestroy {
  private onDestroy$ = new EventEmitter();
  state$: Observable<UserDetailPageComponentState>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userDetailUseCase: UserDetailUseCase,
    private userStateQuery: UserStateQuery,
  ) {
    this.state$ = combineLatest([
        this.userStateQuery.select((state) => state.userDetail.user),
        this.userStateQuery.selectLoading()
    ]).pipe(
        map(([user, isLoading]) => ({
            user, isLoading
        }))
    );
  }

  ngOnInit() {
    this.activatedRoute.params
        .pipe(
            takeUntil(this.onDestroy$),
            map(params => params.userId),
            distinctUntilChanged()
        )
        .subscribe(userId => this.userDetailUseCase.fetchUser(userId));
  }

  ngOnDestroy() {
    this.onDestroy$.next();
  }
}
