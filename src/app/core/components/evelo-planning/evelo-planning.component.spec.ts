import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EveloPlanningComponent } from './evelo-planning.component';

describe('EveloPlanningComponent', () => {
  let component: EveloPlanningComponent;
  let fixture: ComponentFixture<EveloPlanningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EveloPlanningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EveloPlanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
