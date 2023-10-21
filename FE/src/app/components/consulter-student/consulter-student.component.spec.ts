import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterStudentComponent } from './consulter-student.component';

describe('ConsulterStudentComponent', () => {
  let component: ConsulterStudentComponent;
  let fixture: ComponentFixture<ConsulterStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterStudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsulterStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
