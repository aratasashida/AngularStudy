import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../../service/data.service';

@Component({
  selector: 'app-asyncpipe',
  templateUrl: './asyncpipe.component.html',
  styleUrls: ['./asyncpipe.component.scss']
})
export class AsyncpipeComponent {
  value$: Observable<any>;

  constructor(private dataService: DataService) {
    this.value$ = this.dataService.valueChanges;
  }

}
