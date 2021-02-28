import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialtiesDetailsComponent } from './specialties-details.component';

describe('SpecialtiesDetailsComponent', () => {
  let component: SpecialtiesDetailsComponent;
  let fixture: ComponentFixture<SpecialtiesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialtiesDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialtiesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
