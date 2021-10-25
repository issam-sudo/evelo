import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EveloDetailsComponent } from './evelo-details.component';

describe('EveloDetailsComponent', () => {
  let component: EveloDetailsComponent;
  let fixture: ComponentFixture<EveloDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EveloDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EveloDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
