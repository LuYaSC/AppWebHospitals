import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVisitNoteComponent } from './create-visit-note.component';

describe('CreateVisitNoteComponent', () => {
  let component: CreateVisitNoteComponent;
  let fixture: ComponentFixture<CreateVisitNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateVisitNoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateVisitNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
