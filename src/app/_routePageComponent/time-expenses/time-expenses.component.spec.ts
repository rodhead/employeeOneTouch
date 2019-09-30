import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeExpensesComponent } from './time-expenses.component';

describe('TimeExpensesComponent', () => {
  let component: TimeExpensesComponent;
  let fixture: ComponentFixture<TimeExpensesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeExpensesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeExpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
