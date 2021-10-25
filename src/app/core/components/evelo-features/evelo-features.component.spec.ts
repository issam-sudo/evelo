import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EveloFeaturesComponent } from './evelo-features.component';

describe('EveloFeaturesComponent', () => {
  let component: EveloFeaturesComponent;
  let fixture: ComponentFixture<EveloFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EveloFeaturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EveloFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
