import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionSubjectComponent } from './description-subject.component';

describe('DescriptionSubjectComponent', () => {
  let component: DescriptionSubjectComponent;
  let fixture: ComponentFixture<DescriptionSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescriptionSubjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescriptionSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
