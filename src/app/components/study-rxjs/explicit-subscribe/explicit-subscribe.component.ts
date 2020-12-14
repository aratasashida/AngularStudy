import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../../../service/data.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-explicit-subscribe',
  templateUrl: './explicit-subscribe.component.html',
  styleUrls: ['./explicit-subscribe.component.scss']
})
export class ExplicitSubscribeComponent implements OnInit, OnDestroy {
  value: any;
  private onDestroy$ = new Subject();

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.valueChanges
        .pipe(takeUntil(this.onDestroy$))
        .subscribe(value => {
          this.value = value;
        });
  }

  ngOnDestroy() {
    this.onDestroy$.next();
  }

}
