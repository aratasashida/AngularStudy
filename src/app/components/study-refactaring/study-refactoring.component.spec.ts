import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyRefactoringComponent } from './study-refactoring.component';

describe('StudyRefactaringComponent', () => {
  let component: StudyRefactoringComponent;
  let fixture: ComponentFixture<StudyRefactoringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudyRefactoringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyRefactoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
