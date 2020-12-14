import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-study-rxjs',
  templateUrl: './study-rxjs.component.html',
  styleUrls: ['./study-rxjs.component.scss']
})
export class StudyRxjsComponent {

  constructor(private dataService: DataService) {
  }

  updateValue() {
    const value = new Date().toISOString();
    this.dataService.setValue(value);
  }
}


