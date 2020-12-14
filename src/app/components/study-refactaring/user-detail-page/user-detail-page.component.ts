import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { distinctUntilChanged, map, takeUntil } from 'rxjs/operators';
import { UserDetailUseCase } from '../../../service/user-detail-usecase.service';

@Component({
  templateUrl: './user-detail-page.component.html',
  styleUrls: ['./user-detail-page.component.scss'],
})
export class UserDetailPageComponent implements OnInit, OnDestroy {
  user$ = this.userDetailUseCase.user$;

  private onDestroy$ = new EventEmitter();

  constructor(
    private activatedRoute: ActivatedRoute,
    private userDetailUseCase: UserDetailUseCase,
  ) {
    console.log(activatedRoute.snapshot);
  }

  ngOnInit() {
    this.activatedRoute.params
        .pipe(
            takeUntil(this.onDestroy$),
            map(params => params["userId"]),
            distinctUntilChanged()
        )
        .subscribe(userId => this.userDetailUseCase.fetchUser(userId));
  }

  ngOnDestroy() {
    this.onDestroy$.next();
  }
}
