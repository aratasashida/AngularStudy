import { Component } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { DataService } from '../../../service/data.service';

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
    this.state$ = combineLatest(
        [this.dataService.valueChanges], // 必要なストリームを合成する
        ([value]) => ({ value }), // 配列からオブジェクトに変換する
    );
  }
}
