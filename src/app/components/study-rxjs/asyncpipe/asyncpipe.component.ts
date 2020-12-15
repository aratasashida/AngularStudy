import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../../service/data.service';
import { map } from 'rxjs/operators';

type State = {
  value: any;
};
@Component({
  selector: 'app-asyncpipe',
  templateUrl: './asyncpipe.component.html',
  styleUrls: ['./asyncpipe.component.scss']
})
export class AsyncpipeComponent {
  // Single State Stream
  readonly state$: Observable<State>;

  constructor(private dataService: DataService) {
    this.state$ = this.dataService.valueChanges
        .pipe(
            map(value => ({value}))
        );
  }
}
