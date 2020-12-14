import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyRxjsComponent } from './study-rxjs.component';

describe('StudyRxjsComponent', () => {
  let component: StudyRxjsComponent;
  let fixture: ComponentFixture<StudyRxjsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudyRxjsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyRxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
