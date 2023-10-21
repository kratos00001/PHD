import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionPhdComponent } from './inscription-phd.component';

describe('InscriptionPhdComponent', () => {
  let component: InscriptionPhdComponent;
  let fixture: ComponentFixture<InscriptionPhdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriptionPhdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscriptionPhdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
