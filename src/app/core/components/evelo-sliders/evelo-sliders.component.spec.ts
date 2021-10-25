import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EveloSlidersComponent } from './evelo-sliders.component';

describe('EveloSlidersComponent', () => {
  let component: EveloSlidersComponent;
  let fixture: ComponentFixture<EveloSlidersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EveloSlidersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EveloSlidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
